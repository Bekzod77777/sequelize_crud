import { Sequelize } from "sequelize";
import { dbConfig } from "./db.conf.js";

const sequelize = new Sequelize(dbConfig);
!(async function () {
  {
    try {
      sequelize.authenticate();
      console.log("db is connected successfully");
    } catch (error) {
      console.error(error.message);
    }
  }
})();

export { sequelize };
