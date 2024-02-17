const MarkupService = require("../services/crud/crudService");
var mysqldb = require("../config/MysqlDB");
const Response = require("../utils/Response");

const create = async function (req, res) {
  try {
    const markupObj = req.body;
    const markupService = new MarkupService(mysqldb);
    const result = await markupService.create(markupObj);
    res.send(Response.success(result));
  } catch (e) {
    logger.error(e);
    if (e.message) {
      res.status(404).send(Response.error(e));
    } else {
      res.status(500).send(Response.error(e));
    }
  }
};

module.exports = {
    create,
};
