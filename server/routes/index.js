const express = require("express");
const appRouter = express.Router();

const missionRouter = require("./mission");

appRouter.use("/mission", missionRouter);

module.exports = appRouter;
