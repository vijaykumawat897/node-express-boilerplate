const db = require("@config/db");

const getAll = async () => {
  const [rows] = await db.query("SELECT * FROMs users;");
  return rows;
};

module.exports = { getAll };
