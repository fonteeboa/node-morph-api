const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const models = {};

async function loadModels() {
  const tablesQuery = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'";
  const [results] = await sequelize.query(tablesQuery);
  results.forEach(async (tableName) => {
    const columns = await sequelize.getQueryInterface().describeTable(tableName);
    const attributes = {};
    for (const [columnName, columnData] of Object.entries(columns)) {
      attributes[columnName] = {
        type: DataTypes[columnData.type.toUpperCase()] || DataTypes.STRING,
        allowNull: columnData.allowNull,
        primaryKey: columnData.primaryKey || false,
        defaultValue: columnData.defaultValue || null,
      };
    }
    models[tableName] = sequelize.define(tableName, attributes, {
      tableName: tableName,
      timestamps: false,
    });
  });

  await sequelize.sync();
}

loadModels();

module.exports = { models, sequelize };
