const db = require('../database/models')


module.exports = {
    prueba: function(req, res) {
        db.sequelize.query('SELECT * FROM movies')
        .then (function (result) {
            return res.send(result)
        })
    }
       
}