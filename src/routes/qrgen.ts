import express from 'express';
import controller from '../controllers/qrgen';
const router = express.Router();


router.post('/', controller.generateQR);


export = router;
