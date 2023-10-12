import express from 'express';
import controller from '../controllers/eventosDE';
const router = express.Router();


router.post('/', controller.getEvento);

export = router;
