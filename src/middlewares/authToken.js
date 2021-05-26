const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { token } = require("../config/secretToken");

const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    //console.log(authHeader);
    if (!authHeader) {
        return res.json({message:"Token is not defined"});
    }
    const [, resultToken] = authHeader.split(" ");
    try {
        const decoded = await promisify(jwt.verify)(resultToken, token.secret);
        req.codigo_pessoa = decoded.codigo_pessoa;
        return next();
    } catch (err) {
        return res.json({message:"Token inválido"});
    }
}

module.exports = { authenticate }
