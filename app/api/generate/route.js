import clientPromise from "@/lib/mongoDb";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url || !body.shorturl) {
      return new Response(JSON.stringify({ success: false, message: "URL and short URL are required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Check if short URL already exists
    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return new Response(JSON.stringify({ success: false, message: "Short URL already exists" }), { status: 400 });
    }

    // Insert new link
    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, message: "Short URL created successfully" }), { status: 200 });

  } catch (error) {
    console.error("Failed to create link:", error);
    return new Response(JSON.stringify({ success: false, message: "Failed to create link" }), { status: 500 });
  }
}
