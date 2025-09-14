import express from "express";
import Monastery from "../models/Monastery.js";

const router = express.Router();

/**
 * @route   GET /api/monasteries
 * @desc    Get all monasteries
 */
router.get("/", async (req, res) => {
  try {
    const monasteries = await Monastery.find();
    res.json(monasteries);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

/**
 * @route   GET /api/monasteries/:id
 * @desc    Get a single monastery by ID
 */
router.get("/:id", async (req, res) => {
  try {
    const monastery = await Monastery.findById(req.params.id);
    if (!monastery) {
      return res.status(404).json({ message: "Monastery not found" });
    }
    res.json(monastery);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

/**
 * @route   POST /api/monasteries
 * @desc    Create a new monastery
 */
router.post("/", async (req, res) => {
  try {
    const { name, dateOfEstablishment, history, location, bestTimeToVisit } = req.body;

    const newMonastery = new Monastery({
      name,
      dateOfEstablishment,
      history,
      location,
      bestTimeToVisit,
    });

    const saved = await newMonastery.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
});

/**
 * @route   PUT /api/monasteries/:id
 * @desc    Update monastery details
 */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Monastery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Monastery not found" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Invalid data", error: err.message });
  }
});

/**
 * @route   DELETE /api/monasteries/:id
 * @desc    Delete a monastery
 */
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Monastery.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Monastery not found" });
    }
    res.json({ message: "Monastery deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

export default router;
