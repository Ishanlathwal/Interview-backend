const Component1 = require("../Model/component1");
const AppError = require("../Error_Handler/Error-Handeling_Class");
const catchAsyncError = require("../Error_Handler/Catch_Async-Errors");

exports.getdata1 = async (req, res, next) => {
  const component1 = await Component1.find();
  res.status(200).json({
    success: true,
    component1,
  });
};

exports.createData1 = catchAsyncError(async (req, res, next) => {
  const component2 = await Component1.create(req.body);
  res.status(201).json({
    success: true,
    component2,
  });
});

exports.updateData1 = catchAsyncError(async (req, res, next) => {
  const component2 = await Component1.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    },
  );

  res.status(200).json({
    success: true,
    component2,
  });
});

exports.deleteData1 = catchAsyncError(async (req, res, next) => {
  const component1 = await Component1.findById(req.params.id);

  if (!component1) {
    return next(new AppError("data not found", 404));
  }

  await component1.deleteOne();

  res.status(200).json({
    success: true,
    message: " data deleted successfully",
  });
});
