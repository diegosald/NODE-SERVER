const express = require('express');
const path = require('path')
const router = express.Router();
const controlerMotos = require("../controlers/controler_motos")
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: 'public/img/',
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
  });
  
  const upload = multer({ storage });

   
router.get('/', controlerMotos.findAll)
router.get('/:id', controlerMotos.findOne)
router.post('/',upload.single('uploaded_file'), controlerMotos.motoAdd)
router.put('/ACTUALIZAR/:id',upload.single('uploaded_file'),controlerMotos.motoUpdate)
router.delete('/BORRAR/:id',controlerMotos.motoDel)
module.exports = router