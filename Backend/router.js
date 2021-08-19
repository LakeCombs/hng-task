const express = require("express");
const router = express.Router();

const {
  uploadPicture,
  getAllPersona,
  getOnePersona,
  addPersona,
} = require("./controller");

router.get("/", getAllPersona, uploadPicture);
router.get("/:id", getOnePersona, uploadPicture);
router.post("/", addPersona, uploadPicture);

module.exports = router;
