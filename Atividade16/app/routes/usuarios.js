//var dbConnection = require('../config/dbConnection');



module.exports = function(app){

    app.get('/informacao/usuarios', function(req,res){
    var connection = app.config.dbConnection(); // executando a funcao
    var professoresModel = app.models.usuarioModel;
        professoresModel.getUsuario(connection,function(error,results){
            res.render('informacao/usuarios',{users : results});
        });
    });
    }