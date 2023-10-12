import  setApi  from 'facturacionelectronicapy-setapi';
import { Request, Response, NextFunction } from 'express';

type profile =  "prod"|"test";

const sendDE = (req: Request, res: Response, next: NextFunction) => {

    var id :number = +req.params.id; 
    var xmlSigned :string = req.params.xmlSigned;    
    var env = req.params.env; 

    setApi.recibe(id, xmlSigned, env  as profile , '../7155053_identity.p12' , 'Sandra09').then(xml => {
       console.log("XML con QR", xml)
       return res.status(200).json({
        message: xml
     });  
    }).catch(error => {
        res.json(error);
        console.log(error);
    });     
}


const sendXlote = (req: Request, res: Response, next: NextFunction) => {

    var id :number = +req.params.id; 
    var xmlSigned  = [req.params.xmlSigned];    
    var env = req.params.env; 

    setApi.recibeLote(id, xmlSigned, env  as profile , '../7155053_identity.p12' , 'Sandra09').then(xml => {
       console.log("XML con QR", xml)
       return res.status(200).json({
        message: xml
     }); 
    }).catch(error => {
        res.json(error);
        console.log(error);
    });     


}

export default { sendDE , sendXlote }; 