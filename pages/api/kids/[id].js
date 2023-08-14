import dbConnect from "@/db/connect";
import Kid from "@/db/models/Kid";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const kid = await Kid.findById(id).populate("events");

    if (!kid) {
      return response.status(404).json({ status: "No infos found!" });
    }

    response.status(200).json(kid);
  }

}