const db = require('./db')
const Games = db.sequelize.define('games',{
    email:{ type:db.Sequelize.STRING} 

});

module.exports = Games;