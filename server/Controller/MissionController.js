const Mission = require("../Models/Mission");

const MissionController = {
  createMission: async (req, res) => {
    try {
      //   const { name, point, category, description } = req.body;
      const missions = await Mission.insertMany(req.body);
      return res.status(201).json({
        message: "Mission created successfully",
        missions: missions,
        body: req.body,
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  getMissions: async (req, res) => {
    try {
      //   const missions = await Mission.find();
      return res.status(200).json({
        message: "Missions retrieved successfully",
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = MissionController;
