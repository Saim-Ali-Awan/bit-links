import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongoDb";

export default async function Page({ params }) {
  // Await the params Promise to get the actual object
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const existing = await collection.findOne({ shorturl });

  if (existing) {
    redirect(existing.url); // Redirect to the original long URL
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST || "/"); // Fallback to home if not found
  }

  // No return needed — redirect throws and stops rendering
  // If you want a fallback UI (rare for redirect pages), put it before the redirects
}