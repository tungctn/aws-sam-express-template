const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    point: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      // enum: [""],
    },
    description: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Mission = mongoose.model("Mission", missionSchema);
module.exports = Mission;
