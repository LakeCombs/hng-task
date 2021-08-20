const express = require("express");
const router = express.Router();

const {
  uploadPicture,
  getAllPersona,
  getOnePersona,
  addPersona,
  deleteAllResume,
  deleteOne,
} = require("./controller");

router.get("/", getAllPersona, uploadPicture);
router.get("/:id", getOnePersona, uploadPicture);
router.post("/", addPersona, uploadPicture);
router.delete("/", deleteAllResume);
router.delete("/:id", deleteOne);

module.exports = router;
