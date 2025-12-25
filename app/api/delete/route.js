import clientPromise from "@/lib/mongoDb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function DELETE(request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Link ID is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    // Delete the link by ID
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ success: false, message: "Link not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Link deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ success: false, message: "Failed to delete link" }, { status: 500 });
  }
}
