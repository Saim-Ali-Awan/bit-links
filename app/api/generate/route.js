import clientPromise from "@/lib/mongoDb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.url || !body.shorturl) {
      return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
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
