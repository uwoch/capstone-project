import mongoose from "mongoose";
const { Schema } = mongoose;

const kidSchema = new Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  tooth: { type: String, required: true },
  illness: { type: String, required: true },
  cloudinaryPublicId: { type: String, required: true }, 
  image: { type: String, required: true },
});

const Kid =
  mongoose.models.Kid || mongoose.model("Kid", kidSchema);

export default Kid;
