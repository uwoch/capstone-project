import mongoose from "mongoose";
const { Schema } = mongoose;

const kidSchema = new Schema({
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  firstToothDate: { type: Date, required: true },
  firstIllness: { type: String, required: true },
  image: { type: String, required: true },
});

const Kid =
  mongoose.models.Kid || mongoose.model("Kid", kidSchema);

export default Kid;
