// catchAsyncError is a higher-order function that takes an asynchronous function (fn) as its argument.
// It returns a new function that handles asynchronous errors by catching them and passing them to the next middleware.
const catchAsyncError = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
module.exports = catchAsyncError;
