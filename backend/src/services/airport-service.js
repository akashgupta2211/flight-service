const { StatusCodes } = require("http-status-codes");
const { AirportRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const airportRepository = new AirportRepository();
async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);
    return airport;
  } catch (error) {
    console.log("aaaaaaaaaaa", error, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "we got error to create Airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirports(data) {
  try {
    const airport = await airportRepository.getAll(data);
    return airport;
  } catch (error) {
    console.log(error.name);
    throw new AppError(
      "we got error to fetch Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAirport(id) {
  try {
    const airport = await airportRepository.getbyId(id);
    return airport;
  } catch (error) {
    if (error.StatusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airport you requested is no present",
        error.StatusCode
      );
    }

    throw new AppError(
      "we got error to fetch Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirport(id) {
  try {
    const airport = await airportRepository.destroy(id);
    return airport;
  } catch (error) {
    if (error.StatusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airport you requested  to delete no present",
        error.StatusCode
      );
    }

    throw new AppError(
      "we got error to fetch airport",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createAirport, getAirports, getAirport, deleteAirport };
