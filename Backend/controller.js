const persona = require("./model");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb: null, "./Photo";
  },
  filename: function (req, res, cb) {
    cb: null, original.filename;
  },
});

const uploadPicture = multer({ storage: storage }).single("picture");

const getAllPersona = async (req, res) => {
  try {
    const personas = await persona.find();
    res.status(200).json(personas);
  } catch (error) {
    res
      .status(500)
      .json({ error: "an error occour while trying to get the persona" });
  }
};

const getOnePersona = async (req, res) => {
  try {
    const persona = await persona.findById(req.params.id);
    res.status(200).json(persona);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const addPersona = async (req, res) => {
  try {
    const newData = await persona.create(req.body);
    res.status(200).json({
      msg: "created successfully",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAllResume = async (req, res) => {
  try {
    const deleteAll = await persona.deleteMany();
    res.status(200).json(deleteAll);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteOne = async (req, res) => {
  try {
    const deleteSingle = await persona.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteSingle);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  uploadPicture,
  addPersona,
  getAllPersona,
  getOnePersona,
  deleteAllResume,
  deleteOne,
};
