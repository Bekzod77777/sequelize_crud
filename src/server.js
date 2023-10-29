import "dotenv/config";
import express from "express";
import { sequelize } from "./utils/db.connection.js";
import { User } from "./user/models/user.model.js";
import { userRouter } from "./user/router/user.router.js";

async function starter() {
  try {
    const app = express();
    app.use(express.json());

    await sequelize.sync({ alter: true });

    app.use((req, res, next) => {
      req.sequelize = sequelize;
      next();
    });

    app.use(userRouter);

    app.listen(process.env.APP_PORT, () => console.log("started..."));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

starter();
