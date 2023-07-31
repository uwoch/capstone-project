import dbConnect from "@/db/connect";
import Kid from "@/db/models/Kid";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const kids = await Kid.find();
    response.status(200).json(kids);
  }
}