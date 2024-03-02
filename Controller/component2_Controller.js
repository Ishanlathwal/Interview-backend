const Component2 = require("../Model/component2");
const AppError = require("../Error_Handler/Error-Handeling_Class");
const catchAsyncError = require("../Error_Handler/Catch_Async-Errors");

exports.getdata2 = async (req, res, next) => {
  const component2 = await Component2.find();
  res.status(200).json({
    success: true,
    component2,
  });
};

exports.createData2 = catchAsyncError(async (req, res, next) => {
  const component2 = await Component2.create(req.body);
  res.status(201).json({
    success: true,
    component2,
  });
});

exports.updateData2 = catchAsyncError(async (req, res, next) => {
  const component2 = await Component2.findByIdAndUpdate(
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

exports.deleteData2 = catchAsyncError(async (req, res, next) => {
  const component2 = await Component2.findById(req.params.id);

  if (!component2) {
    return next(new AppError("data not found", 404));
  }

  await component2.deleteOne();

  res.status(200).json({
    success: true,
    message: " data deleted successfully",
  });
});
