const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelizeOptions = {
  host: process.env.POSTGRES_DB_HOST || "localhost",
  port: Number(process.env.POSTGRES_DB_PORT) || 5432,
  dialect: process.env.POSTGRES_DB_DIALECT || "postgres",
  logging: process.env.POSTGRES_DB_LOGGING === "true" ? console.log : false,
  pool: {
    max: Number(process.env.POSTGRES_DB_POOL_MAX) || 5,
    min: Number(process.env.POSTGRES_DB_POOL_MIN) || 0,
    acquire: Number(process.env.POSTGRES_DB_POOL_ACQUIRE) || 30000,
    idle: Number(process.env.POSTGRES_DB_POOL_IDLE) || 10000,
    evict: Number(process.env.POSTGRES_DB_POOL_EVICT) || 10000,
    maxUses: Number(process.env.POSTGRES_DB_POOL_MAX_USES) || Infinity, // Corrigido nome da variável
  },
};

if (process.env.POSTGRES_DB_SSL === "true") {
  sequelizeOptions.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || "postgres",
  process.env.POSTGRES_USER || "postgres",
  process.env.POSTGRES_PASSWORD || "postgres",
  sequelizeOptions
);

module.exports = sequelize;
