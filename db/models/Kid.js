import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const kidSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  firstToothDate: { type: Date, required: true },
  firstIllness: { type: String, required: true },
  firstIllnessDate: { type: Date, required: true },
  firstBigEvent: {type: String, required: true},
  firstBigEventDate: {type: Date, required: true},
  ridingTheBike: {type: Date, required: true},
});

const Kid =
  mongoose.models.Kid || mongoose.model("Kid", kidSchema);

export default Kid;
