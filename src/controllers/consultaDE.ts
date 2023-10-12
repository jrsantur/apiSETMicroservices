import  setApi  from 'facturacionelectronicapy-setapi';
import { Request, Response, NextFunction } from 'express';

type profile =  "prod"|"test";

const getDE = (req: Request, res: Response, next: NextFunction) => {

    var id :number = +req.params.id; 
    var cdc :string = req.params.cdc;    
    var env = req.params.env; 

    setApi.consulta(id, cdc, env as profile , '../7155053_identity.p12' , 'Sandra09').then(xml => {
        console.log("XML con QR", xml); 
        return res.status(200).json({
            message: xml
        });  
    }).catch(error => {
        res.json(error);
        console.log(error);
    });     
    
}

const getRuc = (req: Request, res: Response, next: NextFunction) => {
    var id :number = +req.params.id; 
    var ruc :string = req.params.ruc; 
    var env = req.params.env; 

    setApi.consultaRUC(id, ruc, env as profile , '../7155053_identity.p12' , 'Sandra09').then(xml => {
        console.log("XML con QR", xml)
        return res.status(200).json({
            message: xml
        });  
    }).catch(error => {
        res.json(error);
        console.log(error);
    });     

}

const getDEXLote = (req: Request, res: Response, next: NextFunction) => {

    var id :number = +req.params.id; 
    var numeroLote :number = +req.params.numeroLote; 
    var env = req.params.env; 

    setApi.consultaLote(id, numeroLote, env as profile , '../7155053_identity.p12' , 'Sandra09').then(xml => {
        console.log("XML con QR", xml)
        return res.status(200).json({
            message: xml
        });  
    }).catch(error => {
        res.json(error);
        console.log(error);
    });     

}

export default { getDE , getRuc, getDEXLote}; 