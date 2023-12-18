const fs = require("fs");

const questions = JSON.parse(fs.readFileSync("./data/questions.json"));

const getQuestions = (req, res) => {
  res.status(200).json({ status: "success", questions });
};

module.exports = { getQuestions };
