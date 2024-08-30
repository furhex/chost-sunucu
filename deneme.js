const jwt = require("jsonwebtoken")
const token = jwt.sign(
    { userId: "furkan", username: "sa" },
    "key"
    // expiresIn olmadan süresiz token
  );


console.log(token)