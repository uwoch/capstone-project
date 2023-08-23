import dbConnect from "../../../db/connect";
import Event from "../../../db/models/Event";

export default async function handler(request, response) {
  await dbConnect();
  
  if (request.method === "GET") {
    const events = await Event.find();
    return response.status(200).json(events);
  } else if (request.method === "POST") {
    try {
      const eventData = request.body;
      const dataEvents = await Event.create(eventData);

      response.status(201).json({ status: "Event created", data: dataEvents });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
    
  } else if (request.method === "PUT") {
    await Event.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ message: "Update is successful!" });
  } 
    else if (request.method === "DELETE") {
    await Event.findByIdAndDelete(id);
    response.status(200).json({ message: "Event successfully deleted!" });
  }
}