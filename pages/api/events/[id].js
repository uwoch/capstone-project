import dbConnect from "../../../db/connect";
import Event from "../../../db/models/Event";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    console.log("ID:", id);
    const events = await Event.findById(id);
    return response.status(200).json(events);
  
  } else if (request.method === "PUT") {
    await Event.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ message: "Update is successful!" });
  } else if (request.method === "DELETE") {
    await Event.findByIdAndDelete(id);
    response.status(200).json({ message: "Event successfully deleted!" });
  }
}