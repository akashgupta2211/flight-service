const { StatusCodes } = require("http-status-codes");
const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const airplaneRepository = new AirplaneRepository();
async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    console.log(error.name);
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "we got error to create Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes(data) {
  try {
    const airplane = await airplaneRepository.getAll(data);
    return airplane;
  } catch (error) {
    console.log(error.name);
    throw new AppError(
      "we got error to fetch Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getAirplane(id) {
  try {
    const airplane = await airplaneRepository.getbyId(id);
    return airplane;
  } catch (error) {
    if (error.StatusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested is no present",
        error.StatusCode
      );
    }

    throw new AppError(
      "we got error to fetch Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirplane(id) {
  try {
    const airplane = await airplaneRepository.destroy(id);
    return airplane;
  } catch (error) {
    if (error.StatusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "The airplane you requested  to delete no present",
        error.StatusCode
      );
    }

    throw new AppError(
      "we got error to fetch Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createAirplane, getAirplanes, getAirplane, deleteAirplane };
