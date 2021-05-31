//var dbConnection = require('../config/dbConnection');



module.exports = function(app){

app.get('/informacao/professores', function(req,res){
var connection = app.config.dbConnection(); // executando a funcao
var professoresModel = app.models.professoresModel;
    professoresModel.getProfessores(connection,function(error,results){
        res.render('informacao/professores',{profs : results});
    });
});
}
