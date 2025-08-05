const AppError = require("../../utility/appError");
const catchAsync = require("../../utility/catchAsync");
const Todo = require("./todoModel");

/**
 * Get all user data
 */
exports.getTodos = catchAsync(async (req, res, next) => {
  // console.log("id: ", process.env.NETSUITE_ACCOUNTID);

  // 1. Get all user
  const docs = await Todo.find();

  // 2. Send response
  res.status(200).json({
    isSuccess: true,
    status: "success",
    results: docs?.length,
    documents: docs,
  });
});

/**
 * Create user
 */
exports.createTodo = async (req, res, next) => {
  let obj = new Object();

  // 1. Create user
  const doc = await Todo.create(req.body);
  if (!doc) {
    return next(new AppError(`There is a problem while creating user!`, 404));
  }

  // 2. Send response
  res.status(200).json({
    isSuccess: true,
    status: "success",
    document: doc,
  });
};
