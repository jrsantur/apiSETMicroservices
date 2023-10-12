import express from 'express';
import controller from '../controllers/consultaDE';
const router = express.Router();


router.post('/de', controller.getDE);
router.post('/ruc', controller.getRuc);
router.post('/lote', controller.getDEXLote);


export = router;
