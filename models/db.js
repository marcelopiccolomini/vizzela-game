const Sequelize = require('sequelize');
const sequelize = new Sequelize('vizzela', 'root', 'Lca@dallas15', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  });
module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize 
}
