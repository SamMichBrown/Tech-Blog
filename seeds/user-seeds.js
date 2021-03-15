const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'kaycee23',
    password: 'password123'
  },
  {
    username: 'davegu67',
    password: 'password123'
  },
  {
    username: 'jaytom45',
    password: 'password123'
  },
  {
    username: 'caroldu67',
    password: 'password123'
  },
  {
    username: 'howiero98',
    password: 'password123'
  },
  {
    username: 'msprague5',
    password: 'password123'
  },
  {
    username: 'conangy67',
    password: 'password123'
  },
  {
    username: 'hunnie45',
    password: 'password123'
  },
  {
    username: 'jayson86',
    password: 'password123'
  },
  {
    username: 'gordonlite34',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
