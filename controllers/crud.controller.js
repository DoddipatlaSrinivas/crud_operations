const CrudService = require("../services/crud/crudService");
var mysqldb = require("../config/MysqlDB");
// const Response = require("../utils/Response");

const fetch = async function (req, res) {
  try {
    const params = req.query;
    const crudService = new CrudService(mysqldb);
    const result = await crudService.fetchData(params);
    // res.send(Response.success(result));
    console.log(result);
    res.send(result);
  } catch (e) {
    // logger.error(e);
    // if (e.message) {
    //   res.status(404).send(Response.error(e));
    // } else {
    //   res.status(500).send(Response.error(e));
    // }
    console.log(e);
  }
};

module.exports = {
  fetch
};
