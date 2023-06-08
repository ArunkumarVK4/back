require("dotenv").config();

db_url = `${process.env.DB_URL}/users`;

module.exports = { db_url };
