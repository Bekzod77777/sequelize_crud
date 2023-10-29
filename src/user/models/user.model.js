import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../utils/db.connection.js";

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "users", // We need to choose the model name
  }
);

export { User };
