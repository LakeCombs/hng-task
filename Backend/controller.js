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
  const newPersona = {
    title: req.body.title,
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    maritalStatus: req.body.maritalStatus,
    educationLevel: req.body.educationalLevel,
    occpationalStatus: req.body.occpationalStatus,
    sex: req.body.sex,
    background: req.body.background,
    goal: req.body.goal,
    Professional: req.body.Professional,
  };

  try {
    const postPersona = await persona.create(newPersona);
    res.status(200).json(postPersona);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  uploadPicture,
  addPersona,
  getAllPersona,
  getOnePersona,
};
