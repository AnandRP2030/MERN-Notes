// specaiality of these middleware function, they can access req, res objects
// next is a function , if all the validation are success then finally we call the next() function
const validateEmail = (req, res, next) => {
    const {email} = req.body;
    if (!email) {
        return res.status(400).json({error: "Email is required."})
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({error: "Email format is not valid."})
    }   
    // can check other validations if needed
    // if its use only for register/signup route then you can check if the email id already taken or not
    req.userStatus = "active";
    next()
}

module.exports = {validateEmail};

