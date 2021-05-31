module.exports = function(application){

    application.get('/admin/adicionar_usuario', function(req,res){

        res.render('admin/adicionar_usuario');

    });



application.post('/usuario/salvar', function(req,res){



 var usuario = req.body;

 var connection = application.config.dbConnection();

 var usuarioModel = application.models.usuarioModel;







 usuarioModel.salvarUsuario(usuario, connection, function(error, results){



        if(error){

          console.log('Erro ao inserir no banco:' + error);

          res.status(500).send(error);

        } else {

             console.log('usuario criado!!!');

             res.redirect('/informacao/usuario');

         }

});

});

}