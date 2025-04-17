const db = require("@config/db");

const findUserByEmailOrUsername = async (identifier) => {
  const [rows] = await db.query(
    "SELECT * FROM user_login WHERE email = ? OR username = ? LIMIT 1;",
    [identifier, identifier]
  );
  return rows[0];
};

module.exports = {
  findUserByEmailOrUsername,
};
