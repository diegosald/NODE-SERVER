const express = require('express') //llamamos a Express
const app = express()
const cors = require('cors')


//CONECTO LAS RUTAS
const consulta = require('./routes/consulta')
const motos = require('./routes/motos')
const principal = require('./routes/principal')

var port = process.env.PORT || 8080// establecemos nuestro puerto

app.use(cors())
app.use(express.json())
//app.use('/prueba', express.static(__dirname + '/public'));


function probando(req,res,next){
   const prueba = req.path.split('/')[1]
   console.log(prueba.toUpperCase() == "PANEL")
   if (prueba.toUpperCase() == "PANEL"){
      res.send("prohibido 403")
   }
   else next()
   
}
//app.use(probando)
//LE DIGO A LAS RUTAS DONDE SE VAN A VER
app.use('/',principal)
app.use('/motos', motos)
app.use('/form',consulta)

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)