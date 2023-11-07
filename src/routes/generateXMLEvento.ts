import express from 'express';
import controller from '../controllers/generateXMLEvento';
const router = express.Router();


router.post('/', controller.generateXMLEvento);


export = router;
