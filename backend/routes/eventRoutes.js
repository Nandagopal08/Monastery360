import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

/**
 * @route   GET /api/events
 * @desc    Get all events
 */
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("monastery", "name location");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

/**
 * @route   GET /api/events/:id
 * @desc    Get single event by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("monastery", "name location");
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

/**
 * @route   POST /api/events
 * @desc    Create a new event
 */
router.post("/", async (req, res) => {
  try {
    const { name, date, description, monastery } = req.body;

    const newEvent = new Event({
      name,
      date,
      description,
      monastery,
    });

    const saved = await newEvent.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
});

/**
 * @route   PUT /api/events/:id
 * @desc    Update event details
 */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
});

/**
 * @route   DELETE /api/events/:id
 * @desc    Delete an event
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

export default router;
