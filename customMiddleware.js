module.exports = function(params) {
  return (req, res, next) => {
    console.log(`Custom middleware message: ${params}`);
    next();
  };
};
