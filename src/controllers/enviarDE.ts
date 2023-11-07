import  setApi  from 'facturacionelectronicapy-setapi';
import { Request, Response, NextFunction } from 'express';
import path from 'path';

type profile =  "prod"|"test";

const sendDE = (req: Request, res: Response, next: NextFunction) => {

    var id :number = +req.params.id; 
    var xmlSigned :string = req.params.xmlSigned;    
    var env = req.params.env; 
    var pathFile = path.resolve('7155053_identity.p12')


    setApi.recibe(id, xmlSigned, env  as profile , pathFile , 'Sandra09').then(xml => {
       console.log("Envio de factura a la SET", xml)
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


const sendXlote = (req: Request, res: Response, next: NextFunction) => {

    var id :number = +req.params.id; 
    var xmlSigned  = [req.params.xmlSigned];    
    var env = req.params.env; 
    var pathFile = path.resolve('7155053_identity.p12')

    setApi.recibeLote(id, xmlSigned, env  as profile , pathFile , 'Sandra09').then(xml => {
       console.log("Envio de factura a la SET", xml)
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

export default { sendDE , sendXlote }; 