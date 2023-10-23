import  qrgen  from 'facturacionelectronicapy-qrgen'; 

import { Request, Response, NextFunction } from 'express';

type profile =  "prod"|"test";


const generateQR  = (req: Request, res: Response, next: NextFunction) => {

    var xmlSigned :string = req.body.xml;    
    var env = req.body.env; 

    qrgen.generateQR(xmlSigned, '','', env as profile).then(xml => {
        res.json(xml); 
        console.log("XML con QR", xml)
    }).catch(error => {
        res.json(error);
        console.log(error);
    }); 
}


export default {generateQR}; 