import mongoose from "mongoose";

const MonasterySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },                // Monastery name
    dateOfEstablishment: { type: String },                 // Year / Date
    history: { type: String },                             // History description or link
    location: { type: String },                            // City/District/Coordinates
    bestTimeToVisit: { type: String },                     // Eg. "March - June"
    images: [{ type: String }],                            // Array of image URLs
  },
  { timestamps: true }
);

export default mongoose.model("Monastery", MonasterySchema);
