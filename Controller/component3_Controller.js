const Component3 = require("../Model/component3");
const AppError = require("../Error_Handler/Error-Handeling_Class");
const catchAsyncError = require("../Error_Handler/Catch_Async-Errors");
const HitCount = require("../Model/Counter3");

exports.getHitCounts3 = catchAsyncError(async (req, res, next) => {
  const hitCounts = await HitCount.find();

  let createData3HitCount = 0;
  let updateData3HitCount = 0;

  hitCounts.forEach((hitCount) => {
    if (hitCount.endpoint === "createData3") {
      createData3HitCount = hitCount.count;
    } else if (hitCount.endpoint === "updateData3") {
      updateData3HitCount = hitCount.count;
    }
  });

  res.status(200).json({
    success: true,
    createData3HitCount,
    updateData3HitCount,
  });
});
exports.getdata3 = async (req, res, next) => {
  const component3 = await Component3.find();
  res.status(200).json({
    success: true,
    component3,
  });
};

exports.createData3 = catchAsyncError(async (req, res, next) => {
  // Delete existing data in Component1 collection before adding new data
  await Component3.deleteMany();

  const component3 = await Component3.create(req.body);

  let hitCount = await HitCount.findOne({ endpoint: "createData3" });
  if (!hitCount) {
    hitCount = new HitCount({ endpoint: "createData3", count: 0 });
  }
  hitCount.count++;
  await hitCount.save();

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

  let hitCount = await HitCount.findOne({ endpoint: "updateData3" });
  if (!hitCount) {
    hitCount = new HitCount({ endpoint: "updateData3", count: 0 });
  }
  hitCount.count++;
  await hitCount.save();

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
