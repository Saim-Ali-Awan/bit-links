import clientPromise from "@/lib/mongoDb";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.url || !body.shorturl) {
      return new Response(JSON.stringify({ success: false, message: "URL and short URL required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const existing = await collection.findOne({ shorturl: body.shorturl });
    if (existing) {
      return new Response(JSON.stringify({ success: false, message: "Short URL already exists" }), { status: 400 });
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, message: "Short URL created" }), { status: 200 });
  } catch (err) {
    console.error("Create link failed:", err);
    return new Response(JSON.stringify({ success: false, message: "Failed to create link" }), { status: 500 });
  }
}
