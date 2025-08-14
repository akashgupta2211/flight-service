const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const  {CityRepository} = require("../repositories");
const city = require("../models/city");
const cityRepository = new CityRepository();
async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    return city;
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

async function getCities(data) {
  try {
    const city = await cityRepository.getAll(data);
    return city;
  } catch (error) {
    console.log(error.name);
    throw new AppError(
      "we got error to fetch Airplane",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}
async function getCity(id) {
  try {
    const city = await cityRepository.getbyId(id);
    return city;
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

async function deleteCity(id) {
  try {
    const city = await cityRepository.destroy(id);
    return city;
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

module.exports = { createCity, getCities, getCity, deleteCity };
