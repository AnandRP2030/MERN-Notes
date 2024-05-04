const consoleHello = (req, res, next) => {
    console.log("Hello");
    next();
}
module.exports = {consoleHello}