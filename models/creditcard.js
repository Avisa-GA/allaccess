'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class creditcard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  creditcard.init({
    fullName: DataTypes.STRING,
    brand: DataTypes.STRING,
    validForm: DataTypes.STRING,
    untilEnd: DataTypes.STRING,
    ccv: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'creditcard',
  });
  return creditcard;
};