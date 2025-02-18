import { DataTypes, Model } from "sequelize";
import sequelize from "../database";

interface ResourceAttributes {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
}

class Resource extends Model<ResourceAttributes> implements ResourceAttributes {
  public id?: number;
  public declare name: string;
  public declare description: string;
  public readonly createdAt!: Date;
}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "Resource",
    timestamps: true,
  }
);

export default Resource;
