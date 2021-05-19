const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { token } = require("../config/secretToken");

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(400).json("Token is not defined");
    }
    const [, resultToken] = authHeader.split(" ");
    try {
        const decoded = await promisify(jwt.verify)(resultToken, token.secret);
        console.log(token);
        req.codigo_pessoa = decoded.codigo_pessoa;
        return next();
    } catch (err) {
        return res.json(err);
    }
}

module.exports = {
    authenticate
}