const jwt = require("jsonwebtoken");

const UserModel = require("../models/auth");

const jwtSecretKey = process.env.JWT_SECRET_KEY;

const validateUser = async (req, res, next) => {
  const headers = req.headers;
  const tokenFromHeaders = headers.authorization.split(" ")[1];
  /**
   * Points to be validated in token
   * 1. Token should be present
   * 2. Secret key validation (This is the same token that we have generated)
   * 3. Token expiry date should not be passed
   * 4. Validate the issued at date (Optional)
   * 5. Validate the user id if it is present in database
   */

  if (!tokenFromHeaders) {
    return res.status(401).json({
      msg: "Unauthenticated user",
    });
  }

  try {
    jwt.verify(tokenFromHeaders, jwtSecretKey);
  } catch (error) {
    return res.status(401).json({
      msg: "Unauthenticated user",
    });
  }

  const tokenData = jwt.decode(tokenFromHeaders);
  const tokenExp = tokenData.exp;
  const now = Math.ceil(new Date().getTime() / 1_000);

  if (tokenExp < now) {
    return res.status(401).json({
      msg: "Token has expired",
    });
  }

  const userId = tokenData.userId;
  const user = await UserModel.findById(userId);
  if (!user) {
    return res.status(401).json({
      msg: "Unauthorized user",
    });
  }
  req.user = user;
  next();
};

module.exports = validateUser;
