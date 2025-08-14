const express = require("express");
const { AirportController } = require("../../controllers");
const { AirportMiddleware } = require("../../middlewares");
const router = express.Router();

router.post(
  "/",
  AirportMiddleware.validateCreateRequest,
  AirportController.createAirport
);

router.get(
  "/",

  AirportController.getAirports
);

router.get("/:id", AirportController.getAirportById);
router.delete("/:id", AirportController.deleteAirportById);
module.exports = router;
