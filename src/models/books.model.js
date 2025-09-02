const { Model, DataTypes } = require("sequelize");
const sequelize = require("../models/database/dbconnection");

class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    code: {
      type: DataTypes.STRING(10),
      alloNull: false,
      unique: true,
    },

    title: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    author: {
      type: DataTypes.STRING(75),
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(),
      allowNull: false,
    },

    format: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },

    rating: {
      type: DataTypes.DECIMAL(),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "Book",
    tableName: "Books",
    indexes: [
      {
        fields: ["code"],
        name: "idx_books_code",
      },
      {
        fields: ["title"],
        name: "idx_books_title",
      },
    ],
  }
);

/**Exportar el modelo */
module.exports = Book;