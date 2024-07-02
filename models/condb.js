const mysql = require('mysql')

module.exports = function conectar (){
const con = mysql.createConnection({
    host: "localhost",
    user: "appmoto",
    password: "motoapp",
    database: "appmotos"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });

  return con

}