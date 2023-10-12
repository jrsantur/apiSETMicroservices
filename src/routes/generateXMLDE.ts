import express from 'express';
import controller from '../controllers/generateXMLDE';
const router = express.Router();


router.post('/xml', controller.generateXMLDE);


export = router;
