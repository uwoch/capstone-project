import mongoose from "mongoose";
import "./Event";

const { Schema } = mongoose;

const kidSchema = new Schema({
  imageId: { type: String, required: true },
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  events: { type: [Schema.Types.ObjectId], ref: "Event"},
});

const Kid =
  mongoose.models.Kid || mongoose.model("Kid", kidSchema);

export default Kid;
