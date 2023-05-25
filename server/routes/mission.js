const express = require("express");
const missionRouter = express.Router();
const MissionController = require("../Controller/MissionController");

missionRouter.post("/", MissionController.createMission);
missionRouter.get("/", MissionController.getMissions);

module.exports = missionRouter;