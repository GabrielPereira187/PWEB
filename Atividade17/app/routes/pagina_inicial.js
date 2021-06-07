module.exports = function(app){
    app.get('/informacao/historia', function(req,res){
        res.render("informacao/pagina_inicial")
    });
}