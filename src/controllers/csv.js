const fs = require("fs");
const csv = require("fast-csv");
const knex = require("../scripts/conection");

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

const getAll = async (req, res) => {
  const result = await knex("topico02").select("*");

  return res.json(result);
};

module.exports = { readCSV, getAll };
