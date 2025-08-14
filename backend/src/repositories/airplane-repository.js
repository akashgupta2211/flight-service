const { logger } = require("../config");
const crudRepository = require("./crud-repository");
const { Airplane } = require("../models");
class airplaneRepository extends crudRepository {
  constructor() {
    super(Airplane);
  }
}
module.exports = airplaneRepository;
