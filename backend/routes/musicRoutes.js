import express from "express";
import { uploadFiles } from "../controllers/musicController.js";
import { processFiles } from "../controllers/musicController.js";
import validate from "./../utils/validate.js";
const router = express.Router();

import {
  createMusic,
  deleteMusic,
  getMusics,
  updateMusic,
} from "../controllers/musicController.js";

router.route("/").get(getMusics).post(uploadFiles, validate, processFiles, createMusic);

router.route("/:id").patch(updateMusic).delete(deleteMusic);

export default router;
