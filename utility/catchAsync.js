/**
 * This catchAsync function is ment to return a function so that every method which will covered by
 * this catchAsync is treated as method.
 */
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
