const express = require("express");
const app = express();
const dynamicRoutes = require("./routes/dynamicRoutes");
const sequelize = require("./models").sequelize;
const cors = require("cors");

require("dotenv").config();

// Middleware para logar requisições recebidas
app.use((req, res, next) => {
  console.info(`Received: ${req.method} ${req.url}`);
  next();
});
app.use(cors());

app.use(express.json());
app.use("/api", dynamicRoutes);

sequelize.authenticate()
  .then(() => console.log("Database connected successfully."))
  .catch(err => console.error("Error connecting to the database:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});