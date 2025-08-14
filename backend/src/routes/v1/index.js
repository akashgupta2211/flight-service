const express = require("express");
const { infoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const airportRoutes = require("./airport-route");
const cityRoutes = require("./city-routes");
const router = express.Router();



router.use("/airplanes", airplaneRoutes)
router.use("/city", cityRoutes)
router.use("/airport", airportRoutes)
router.get("/info",infoController)
module.exports = router;
