const { StatusCodes } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const createCity = async (req, res) => {
  try {
    console.log(req.body);
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};

const getCities = async (req, res) => {
  try {
    const cities = await CityService.getCities();
    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};

const getCityById = async (req, res) => {
  try {
    const city = await CityService.getCity(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};

const deleteCityById = async (req, res) => {
  try {
    const city = await CityService.deleteCity(req.params.id);
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};
module.exports = {
  createCity,
  getCities,
  getCityById,
  deleteCityById,
};
