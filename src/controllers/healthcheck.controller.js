import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

const healthcheck = asyncHandler(async (req, res, next) => {
  try {
    console.log("Client ip: ", req.clientIp);
    res.status(200).json(new ApiResponse(200, "OK", "Health check passed"));
  } catch (err) {
    next(err);
  }
});

export default healthcheck;
