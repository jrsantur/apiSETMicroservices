import express from 'express';
import controller from '../controllers/enviarDE';
const router = express.Router();


router.post('/de', controller.sendDE);
router.post('/lote', controller.sendXlote);

export = router;
