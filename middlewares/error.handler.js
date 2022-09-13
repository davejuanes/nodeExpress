function logErrors (err, re, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, re, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

module.exports = { logErrors, errorHandler }
