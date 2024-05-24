const express = require('express');
const albumFotosController = require('../controllers/albumFotosController');
const router = express.Router();

router.get('/list', albumFotosController.albumFotos_list);
router.get('/get/:id', albumFotosController.albumFotos_detail);
router.post('/create', albumFotosController.albumFotos_create);
router.put('/update/:id', albumFotosController.albumFotos_update);
router.delete('/delete/:id', albumFotosController.albumFotos_delete);

module.exports = router;