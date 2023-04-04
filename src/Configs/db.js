const {Sequelize, DataTypes} = require('sequelize');

//const sequelize = require('sequelize');
const sequelize = new Sequelize('ikonalx', 'postgres', 'Krystabella151289', {
  dialect: 'postgres'
});

// Checking if connection is done
sequelize.authenticate().then(() => {
    console.log('Connection to ikonalx has been established successfully.');
}).catch((err) => {
    console.log(err)
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.user = require('../Models/userModel')(sequelize, DataTypes);

// Export the module
module.exports = db;