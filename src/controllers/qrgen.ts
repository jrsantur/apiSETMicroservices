import  qrgen  from 'facturacionelectronicapy-qrgen'; 

import { Request, Response, NextFunction } from 'express';

type profile =  "prod"|"test";


const generateQR  = (req: Request, res: Response, next: NextFunction) => {

    var xmlSigned :string = req.body.xml;    
    var env = "test"; 

    qrgen.generateQR(xmlSigned, '1','', env as profile).then(xml => {
        console.log("XML con QR", xml)
        return res.status(200).json({
            message: xml
        });          
    }).catch(error => {
        console.log(error);
        return res.status(500).json({
            message: error
        });
    }); 
}


export default {generateQR}; 