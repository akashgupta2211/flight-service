const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { calculateFlightDuration } = require("../utils/helper/time-helper");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const duration = calculateFlightDuration(
      data.departureTime,
      data.arrivalTime
    );

    if (!duration) {
      throw new AppError(
        "Arrival time must be after departure time",
        StatusCodes.BAD_REQUEST
      );
    }

    const flight = await flightRepository.create({ ...data, duration });
    return flight;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    console.log(error);
    throw new AppError(
      "Cannot create a new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAllFlights(query) {
  let customFilter = {};
  let sortFilter = [];
  const endingTripTime = "23:59:00";
  if (query.trips) {
    const [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.arrivalAirportId = arrivalAirportId;
    customFilter.departureAirportId = departureAirportId;
  }

  if (query.price) {
    const [minPrice, maxPrice] = query.price.split("-");

    customFilter.price = {
      [Op.between]: [minPrice, maxPrice == undefined ? 2000000 : maxPrice],
    };
  }

  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }

  if (query.tripDate) {
    const startOfDay = new Date(query.tripDate);
    startOfDay.setHours(0, 0, 0, 0); // 2025-08-20 00:00:00

    const endOfDay = new Date(query.tripDate);
    endOfDay.setHours(23, 59, 59, 999); // 2025-08-20 23:59:59

    customFilter.departureTime = {
      [Op.between]: [startOfDay, endOfDay],
    };
  }

  if (query.sort) {
    const params = query.sort.split(",");
    const sortFilters = params.map((param) => param.split("_"));
    sortFilter = sortFilters;
  }

  console.log(customFilter, sortFilter);

  try {
    const flight = await flightRepository.getAllFlights(
      customFilter,
      sortFilter
    );
    return flight;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Cannot fetch data of all the flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
module.exports = {
  createFlight,
  getAllFlights,
};
