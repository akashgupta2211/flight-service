const { StatusCodes } = require("http-status-codes");
const { AirportService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const createAirport = async (req, res) => {
  try {
    console.log(req.body);
    const airport = await AirportService.createAirport({
      name: req.body.name,
      cityId: req.body.cityId,
      code: req.body.code,

    })
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};

const getAirports = async (req, res) => {
  try {
    const airport = await AirportService.getAirports();

    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};

const getAirportById = async (req, res) => {
  try {
    const airport = await AirportService.getAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};

const deleteAirportById = async (req, res) => {
  try {
    const airport = await AirportService.deleteAirport(req.params.id);
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};
module.exports = {
  createAirport,
  getAirports,
  getAirportById,
  deleteAirportById,
};
