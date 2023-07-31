import mongoose from "mongoose";
const { Schema } = mongoose;

const kidSchema = new Schema({
  name: { type: String, required: true },
  dob: { type: Number, required: true },
  tooth: { type: Number, required: true },
  illness: { type: String, required: true },
});

const Kid =
  mongoose.models.Kid || mongoose.model("Kid", kidSchema);

export default Kid;
