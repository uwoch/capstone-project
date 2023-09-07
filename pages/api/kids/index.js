import dbConnect from "@/db/connect";
import Kid from "@/db/models/Kid";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const kids = await Kid.find();
    response.status(200).json(kids);
  } else if (request.method === "POST") {
    try {
      const kidData = request.body;
      await Kid.create(kidData);

      response.status(201).json({ status: "Kid created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }}
}