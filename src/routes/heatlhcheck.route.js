const router = require("express").Router();
const healthcheck = require("../controllers/healthcheck.controller");


router.route("/healthCheck").get(healthcheck);

module.exports = router;
