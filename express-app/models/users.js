const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Users extends Model {}
Users.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  dateOfBirth: {
    type: DataTypes.DATE,
    allowNull: false,
    notEmpty: true,
    isDate: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  streetAddress: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
  file: {
    type: DataTypes.STRING,
    allowNull: false,
    notEmpty: true,
  },
}, { sequelize, modelName: 'user' });

Users.createInstance = async (params) => {
  await sequelize.sync();
  return Users.create(params);
}

Users.findAllInstances = async () => {
  await sequelize.sync();
  return Users.findAll();
}

module.exports = Users;