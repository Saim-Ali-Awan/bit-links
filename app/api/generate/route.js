import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// Use environment variables
const uri = process.env.MONGODB_URI; // MongoDB connection string
const dbName = process.env.MONGODB_DB || "bitlinks"; // fallback to "bitlinks"

let client;
let clientPromise;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to preserve the connection
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.url || !body.shorturl) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(dbName);
    const collection = db.collection("url");

    // Check if the short URL exists
    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return NextResponse.json({ success: false, message: "Short URL already exists" }, { status: 409 });
    }

    const result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Short URL created successfully",
      link: { _id: result.insertedId, url: body.url, shorturl: body.shorturl, createdAt: new Date() }
    });
  } catch (error) {
    console.error("Generate error:", error);
    return NextResponse.json({ success: false, message: "Failed to create link" }, { status: 500 });
  }
}
