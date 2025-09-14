import Monastery from "../models/Monastery.js";

// @desc    Get all monasteries
// @route   GET /api/monasteries
export const getMonasteries = async (req, res) => {
  try {
    const monasteries = await Monastery.find();
    res.status(200).json(monasteries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching monasteries", error });
  }
};

// @desc    Get a single monastery by ID
// @route   GET /api/monasteries/:id
export const getMonasteryById = async (req, res) => {
  try {
    const monastery = await Monastery.findById(req.params.id);
    if (!monastery) {
      return res.status(404).json({ message: "Monastery not found" });
    }
    res.status(200).json(monastery);
  } catch (error) {
    res.status(500).json({ message: "Error fetching monastery", error });
  }
};

// @desc    Create a new monastery
// @route   POST /api/monasteries
export const createMonastery = async (req, res) => {
  try {
    const { name, location, dateOfEstablishment, history, bestTimeToVisit } = req.body;

    const monastery = new Monastery({
      name,
      location,
      dateOfEstablishment,
      history,
      bestTimeToVisit,
    });

    const savedMonastery = await monastery.save();
    res.status(201).json(savedMonastery);
  } catch (error) {
    res.status(400).json({ message: "Error creating monastery", error });
  }
};

// @desc    Update a monastery
// @route   PUT /api/monasteries/:id
export const updateMonastery = async (req, res) => {
  try {
    const monastery = await Monastery.findById(req.params.id);

    if (!monastery) {
      return res.status(404).json({ message: "Monastery not found" });
    }

    monastery.name = req.body.name || monastery.name;
    monastery.location = req.body.location || monastery.location;
    monastery.dateOfEstablishment = req.body.dateOfEstablishment || monastery.dateOfEstablishment;
    monastery.history = req.body.history || monastery.history;
    monastery.bestTimeToVisit = req.body.bestTimeToVisit || monastery.bestTimeToVisit;

    const updatedMonastery = await monastery.save();
    res.status(200).json(updatedMonastery);
  } catch (error) {
    res.status(400).json({ message: "Error updating monastery", error });
  }
};

// @desc    Delete a monastery
// @route   DELETE /api/monasteries/:id
export const deleteMonastery = async (req, res) => {
  try {
    const monastery = await Monastery.findById(req.params.id);

    if (!monastery) {
      return res.status(404).json({ message: "Monastery not found" });
    }

    await monastery.deleteOne();
    res.status(200).json({ message: "Monastery deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting monastery", error });
  }
};
