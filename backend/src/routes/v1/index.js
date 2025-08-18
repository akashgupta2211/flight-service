const express = require("express");
const { infoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const airportRoutes = require("./airport-route");
const cityRoutes = require("./city-routes");
const flightRoutes = require("./flight-routes");

const router = express.Router();

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airport", airportRoutes);
router.use("/flights", flightRoutes);
router.get("/info", infoController);
module.exports = router;
