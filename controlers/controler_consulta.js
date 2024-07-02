//const modelcon = require("../models/model_consulta")

const con = require('../models/condb')

function findAll (req , res){
        var resultado = [] 
        
        con().query('select * from consultas where leido = 0',function (err, result, fields) {
            if (err) throw err;
               // console.log(result)
                 res.status(200).json({
                    body : result,
                    rows : result.length
                 }) 
                  console.log(result)
                  });
        
               }
               



function conAdd(req , res){
    con().query('insert into consultas (nya,consulta,correo) values (? , ? , ?);' , [req.body.nya , req.body.consulta , req.body.correo],function (err, result, fields) {
        if (err) throw err;
         if (result.affectedRows=='1') res.status('200').json('ok')
             
    })
        
      
    }              
function conDel(req , res){
    con().query('delete from consultas where id_consulta = ?' , [req.params.id],function (err, result, fields) {
        if (err) throw err;
         if (result.affectedRows=='1') res.status(200).json({id : req.params.id})
             
    })
        
      
    }
function conLeido (req , res){
    con().query('update consultas set leido = 1 where id_consulta= ? ',[req.params.id], function (err, result, fields) {
        if (err) throw err;
         if (result.affectedRows=='1') res.status('200').json({id : req.params.id})
             
    })

}              



module.exports = {findAll,conAdd, conDel , conLeido}

