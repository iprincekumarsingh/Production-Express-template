import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import mongoose from "mongoose"; // assuming mongoose is imported somewhere else

/**
 * @param {Error | ApiError} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 *
 * @description This middleware is responsible for catching errors from any request handler wrapped inside the {@link asyncHandler}.
 */
const errorHandler = (err, req, res, next) => {
  let error = err;

  // Check if the error is an instance of the ApiError class which extends the native Error class
  if (!(error instanceof ApiError)) {
    // If not, create a new ApiError instance to maintain consistency

    // Assign an appropriate status code
    const statusCode =
      error.statusCode || error instanceof mongoose.Error ? 400 : 500;

    // Set a message from the native Error instance or a custom one
    const message = error.message || "Something went wrong";
    error = new ApiError(statusCode, message, error?.errors || [], err.stack);
  }

  // Now we are sure that the `error` variable will be an instance of the ApiError class
  const response = {
    ...error,
    message: error.message,
    ...(process.env.NODE_ENV === "development" ? { stack: error.stack } : {}),
  };

  // Send error response
  return res.status(error.statusCode).json(response);
};

export {errorHandler}
