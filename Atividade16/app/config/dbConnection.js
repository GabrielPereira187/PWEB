var mysql = require('mysql');



module.exports = function(){

    return connection = mysql.createConnection({

        host: 'localhost',

        user: 'root',

        password: '1234',

        database: 'site_fatec'

    });

}

module.exports = function(){
    console.log("carregou");
    return connMySQL;
}