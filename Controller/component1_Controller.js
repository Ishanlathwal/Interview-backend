// Imports
const Component1 = require("../Model/component1");
const AppError = require("../Error_Handler/Error-Handeling_Class");
const catchAsyncError = require("../Error_Handler/Catch_Async-Errors");
const HitCount = require("../Model/Counter1");

// Controller to get hit counts for createData1 and updateData1 endpoints

exports.getHitCounts1 = catchAsyncError(async (req, res, next) => {
  console.time("getHitCounts1");
  const hitCounts = await HitCount.find();

  let createData1HitCount = 0;
  let updateData1HitCount = 0;

  hitCounts.forEach((hitCount) => {
    if (hitCount.endpoint === "createData1") {
      createData1HitCount = hitCount.count;
    } else if (hitCount.endpoint === "updateData1") {
      updateData1HitCount = hitCount.count;
    }
  });

  res.status(200).json({
    success: true,
    createData1HitCount,
    updateData1HitCount,
  });
  console.timeEnd("getHitCounts1");
});

// Controller to get all data from Component1 collection
exports.getdata1 = async (req, res, next) => {
  console.time("getData1");

  const component1 = await Component1.find();
  res.status(200).json({
    success: true,
    component1,
  });
  console.timeEnd("getData1");
};

// Controller to create new data in Component1 collection
exports.createData1 = catchAsyncError(async (req, res, next) => {
  console.time("createData1");

  // Delete existing data in Component1 collection before adding new data
  await Component1.deleteMany();

  // Create new data based on request body
  const component2 = await Component1.create(req.body);

  let hitCount = await HitCount.findOne({ endpoint: "createData1" });
  if (!hitCount) {
    hitCount = new HitCount({ endpoint: "createData1", count: 0 });
  }
  hitCount.count++;
  await hitCount.save();

  res.status(201).json({
    success: true,
    component2,
  });
  console.timeEnd("createData1");
});

// Controller to update data in Component1 collection
exports.updateData1 = catchAsyncError(async (req, res, next) => {
  console.time("updateData1");
  const component2 = await Component1.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    },
  );

  let hitCount = await HitCount.findOne({ endpoint: "updateData1" });
  if (!hitCount) {
    hitCount = new HitCount({ endpoint: "updateData1", count: 0 });
  }
  hitCount.count++;
  await hitCount.save();

  res.status(200).json({
    success: true,
    component2,
  });
  console.timeEnd("updateData1");
});

// exports.deleteData1 = catchAsyncError(async (req, res, next) => {
//   const component1 = await Component1.findById(req.params.id);

//   if (!component1) {
//     return next(new AppError("data not found", 404));
//   }

//   await component1.deleteOne();

//   res.status(200).json({
//     success: true,
//     message: " data deleted successfully",
//   });
// });
