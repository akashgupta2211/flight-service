const { logger } = require("../config");
const crudRepository = require("./crud-repository");
const { Airport } = require("../models");
class airportRepository extends crudRepository {
  constructor() {
    super(Airport);
  }
}
module.exports = airportRepository;
