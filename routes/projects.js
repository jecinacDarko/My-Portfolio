const { MyProjects } = require("../db");
const express = require("express");
const router = express.Router();

router.get("/:uuid", async (req, res) => {
  const project = await MyProjects.findall({ });

});