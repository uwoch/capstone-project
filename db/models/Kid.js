import mongoose from "mongoose";
const { Schema } = mongoose;

/* const eventSchema = new Schema({
eventType: { type: String, required: true },
date: Date,
}); */

const kidSchema = new Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
 /*  events: [eventSchema], */
});

const Kid =
  mongoose.models.Kid || mongoose.model("Kid", kidSchema);

export default Kid;
