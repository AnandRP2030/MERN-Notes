const validatePassword = (req, res, next) => {
    const {password} = req.body;
    if (!password || password.length < 6) {
        return res.status(400).json({message: "Your password is not valid"})
    }
    next();
}
module.exports = {validatePassword}