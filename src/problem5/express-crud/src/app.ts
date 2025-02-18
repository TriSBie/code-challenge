import express from "express";
import resourceRoutes from "./routes/resources";
import sequelize from "./database";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/resources", resourceRoutes);

// Database sync
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

// Error handling when a route is not found
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

process.on("unhandledRejection", (error) => {
  console.error("Unhandled Rejection:", error);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});
