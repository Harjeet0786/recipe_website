const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeControllers.js");

/**
 * App Routes
 */

router.get("/", recipeController.homepage);
module.exports = router;