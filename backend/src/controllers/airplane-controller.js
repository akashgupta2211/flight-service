const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");
const createAirplane = async (req, res) => {
  try {
    console.log(req.body);
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};

const getAirplanes = async (req, res) => {
  try {
    const airplane = await AirplaneService.getAirplanes();

    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};

const getAirplaneById = async (req, res) => {
  try {
    const airplane = await AirplaneService.getAirplane(req.params.id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};

const deleteAirplaneById = async (req, res) => {
  try {
    const airplane = await AirplaneService.deleteAirplane(req.params.id);
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);

    ErrorResponse.error = error;
    return res.status(error.StatusCode).json(ErrorResponse);
  }
};
module.exports = {
  createAirplane,
  getAirplanes,
  getAirplaneById,
  deleteAirplaneById
};
