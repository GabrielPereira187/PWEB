module.exports = function(){
    this.getUsuario = function(connection,callback){
        connection.query('select * from usuario',callback);
    }

    this.getUsuario = function(connection,callback){
        connection.query('select * from usuario where id_usuario = 1',callback);
    }
    this.salvarUsuario = function(professor, connection, callback){

        connection.query('insert into usuario SET ?', usuario, callback);

    }



    return this;



}