const { StatusCodes } = require("http-status-codes");

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

    // 🛑 Agar duration invalid hai
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

    throw new AppError(
      "Cannot create a new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
};
