const env = require("dotenv");
env.config();

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Lt_lopes1994",
    database: "cobre_bem",
  },
});

module.exports = knex;