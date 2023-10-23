import  qrgen  from 'facturacionelectronicapy-qrgen'; 

import { Request, Response, NextFunction } from 'express';

type profile =  "prod"|"test";


const generateQR  = (req: Request, res: Response, next: NextFunction) => {

    var xmlSigned :string = req.body.xml;    
    var env = req.body.env; 

    qrgen.generateQR(xmlSigned, '','', env as profile).then(xml => {
        console.log("XML con QR", xml)
        return res.status(200).json({
            message: xml
        });          
    }).catch(error => {
        res.json(error);
        console.log(error);
    }); 
}


export default {generateQR}; 