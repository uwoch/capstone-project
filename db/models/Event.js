import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema({
  eventType: { type: String, required: true},
  date: Date,
  image: Buffer,
});

const Event =
  mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
