const fs = require("fs");
const csv = require("fast-csv");
const knex = require("../connection/dbConnection");

const readCSV = async (req, res) => {
  const filePath = "./src/csvFiles/backend.csv";

  const stream = fs.createReadStream(filePath);

  const streamCsv = csv
    .parse({
      headers: true,
    })
    .on("data", async (data) => {
      const result = await knex("topico02").insert({
        ...data,
      });

      console.log(result);
      return res.json(result);
    });

  stream.pipe(streamCsv);
};

module.exports = readCSV;
