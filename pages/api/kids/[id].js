import dbConnect from "../../../db/connect";
import Kid from "../../../db/models/Kid";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const kid = await Kid.findById(request.query.id);

    if (!kid) {
      return response.status(404).json({ status: "No infos found!" });
    }

    response.status(200).json(kid);
  }
}
