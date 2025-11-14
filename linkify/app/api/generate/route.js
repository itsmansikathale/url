import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = request.json();
  const client = await clientPromise;
  const db = client.db("linkify");
  const collection = db.collection("url");

  //  Here we are checking if the short url Exists or not ?
  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });

  return Response.json({
    success: true,
    error: false,
    message: "URL Generated Successfully",
  });
}
