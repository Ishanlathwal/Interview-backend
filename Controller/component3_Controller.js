const Component3 = require("../Model/component3");
const AppError = require("../Error_Handler/Error-Handeling_Class");
const catchAsyncError = require("../Error_Handler/Catch_Async-Errors");

exports.getdata3 = async (req, res, next) => {
  const component3 = await Component3.find();
  res.status(200).json({
    success: true,
    component3,
  });
};

exports.createData3 = catchAsyncError(async (req, res, next) => {
  const component3 = await Component3.create(req.body);
  res.status(201).json({
    success: true,
    component3,
  });
});

exports.updateData3 = catchAsyncError(async (req, res, next) => {
  const component3 = await Component3.findByIdAndUpdate(
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
    component3,
  });
});

exports.deleteData3 = catchAsyncError(async (req, res, next) => {
  const component3 = await Component3.findById(req.params.id);

  if (!component3) {
    return next(new AppError("data not found", 404));
  }

  await component3.deleteOne();

  res.status(200).json({
    success: true,
    message: " data deleted successfully",
  });
});
