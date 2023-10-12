import  setApi  from 'facturacionelectronicapy-setapi';
import { Request, Response, NextFunction } from 'express';

type profile =  "prod"|"test";

const getEvento = (req: Request, res: Response, next: NextFunction) => {

    var id :number = +req.params.id; 
    var xmlSigned :string = req.params.xmlSigned;    
    var env = req.params.env; 


    setApi.evento(id, xmlSigned, env as profile , '../7155053_identity.p12' , '123456').then(xml => {
       console.log("XML con QR", xml)
       return res.status(200).json({
        message: xml
    });  
    }).catch(error => {
        res.json(error);
        console.log(error);
    });     

}

export default {getEvento};   