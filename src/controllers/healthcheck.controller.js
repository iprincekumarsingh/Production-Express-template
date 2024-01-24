const asyncHandler = require("../utils/asyncHandler");
const ApiResponse = require("../utils/ApiResponse");

const healthcheck = asyncHandler(async (req, res, next) => {
  try {
    console.log("Client ip: ", req.clientIp);
    res.status(200).json(new ApiResponse(200, "OK", "Health check passed"));
  } catch (err) {
    next(err);
  }
});

module.exports = healthcheck;
