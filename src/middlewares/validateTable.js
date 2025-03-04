const { models } = require("../models");

module.exports = (req, res, next) => {
  const { table } = req.params;
  if (!models[table]) {
    return res.status(400).json({ error: "invalid.table" });
  }
  req.model = models[table];
  next();
};
