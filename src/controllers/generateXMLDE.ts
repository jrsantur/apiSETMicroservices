import  xmlgen from 'facturacionelectronicapy-xmlgen';

import { Request, Response, NextFunction } from 'express';
import { XmlgenConfig } from 'facturacionelectronicapy-xmlgen/dist/services/type.interface.';


const generateXMLDE = (req: Request, res: Response, next: NextFunction) => {

    var data :any = req.body.data; 
    var params :any = req.body.params;  
   
    console.log(params); 
    console.log(data); 


    xmlgen.generateXMLDE(params, data).then(xml => {
        
       console.log(xml);
       return res.status(200).json({
        message: xml
        });  
    }).catch(error => {
        res.json(error);
        console.log(error);
    });     

}


export default {generateXMLDE}; 

