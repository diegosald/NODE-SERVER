const con = require('../models/condb')


function findAll(req, res) {

    con().query('select * from motos', function (err, result, fields) {
        if (err) throw err;
        // console.log(result)
        res.status(200).json({
            body: result,
            rows: result.length
        })
        console.log(result)
    });

}

function findOne(req, res) {


    con().query('select * from motos where id_moto = ?', [req.params.id], function (err, result, fields) {
        if (err) throw err;
        // console.log(result)
        res.status(200).json({
            body: result,
            rows: result.length
        })
        console.log(result)
    });

}

function motoUpdate(req, res){
    
    let nombreArch = req.file
     if (nombreArch == null) {
        nombreArch = req.body.fotoant
     }
     else{
        nombreArch = req.file.filename
     }

     console.log(req.body.modelo)
     console.log(nombreArch)
     con().query("UPDATE motos SET modelo = ? , descripcion= ? , precio = ? , foto = ? WHERE id_moto = ?;", [req.body.modelo, req.body.descri, req.body.precio, nombreArch ,req.params.id], function (err, result, fields) {
        if (err) throw err;
        if (result.affectedRows == '1') res.status(200).json('ok')

    })
   
   
     
}


function motoAdd(req, res) {

    console.log(req.body.modelo)
    res.status(200)
    con().query('insert into motos (modelo,descripcion,precio ,foto) values (? , ? , ? , ?);', [req.body.modelo, req.body.descri, req.body.precio, req.file.filename], function (err, result, fields) {
        if (err) throw err;
        if (result.affectedRows == '1') res.status(200).json('ok')

    })


}
function motoDel(req, res) {
    con().query('delete from motos where id_moto = ?', [req.params.id], function (err, result, fields) {
        if (err) throw err;
        if (result.affectedRows == '1') res.status(200).json({ id: req.params.id })

    })

}




module.exports = { findAll, findOne, motoUpdate, motoAdd, motoDel}