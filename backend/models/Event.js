import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },               // Event name
    date: { type: Date, required: true },                 // Event date
    description: { type: String },                        // Event details
    monastery: {
      type: mongoose.Schema.Types.ObjectId,               // Link to Monastery
      ref: "Monastery",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", EventSchema);
