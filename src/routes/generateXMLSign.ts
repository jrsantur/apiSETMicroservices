import express from 'express';
import controller from '../controllers/generateXMLSign';
const router = express.Router();


router.post('/', controller.generateXMLSign);


export = router;
