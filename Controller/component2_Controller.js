const Component2 = require("../Model/component2");
const AppError = require("../Error_Handler/Error-Handeling_Class");
const catchAsyncError = require("../Error_Handler/Catch_Async-Errors");
const HitCount = require("../Model/Counter2");

exports.getHitCounts2 = catchAsyncError(async (req, res, next) => {
  const hitCounts = await HitCount.find();

  let createData2HitCount = 0;
  let updateData2HitCount = 0;

  hitCounts.forEach((hitCount) => {
    if (hitCount.endpoint === "createData2") {
      createData2HitCount = hitCount.count;
    } else if (hitCount.endpoint === "updateData2") {
      updateData2HitCount = hitCount.count;
    }
  });

  res.status(200).json({
    success: true,
    createData2HitCount,
    updateData2HitCount,
  });
});

exports.getdata2 = async (req, res, next) => {
  const component2 = await Component2.find();
  res.status(200).json({
    success: true,
    component2,
  });
};

exports.createData2 = catchAsyncError(async (req, res, next) => {
  // Delete existing data in Component1 collection before adding new data
  await Component2.deleteMany();

  const component2 = await Component2.create(req.body);

  let hitCount = await HitCount.findOne({ endpoint: "createData2" });
  if (!hitCount) {
    hitCount = new HitCount({ endpoint: "createData2", count: 0 });
  }
  hitCount.count++;
  await hitCount.save();
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

  let hitCount = await HitCount.findOne({ endpoint: "updateData2" });
  if (!hitCount) {
    hitCount = new HitCount({ endpoint: "updateData2", count: 0 });
  }
  hitCount.count++;
  await hitCount.save();

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
