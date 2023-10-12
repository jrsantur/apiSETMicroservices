import  xmlgen from 'facturacionelectronicapy-xmlgen';

import { Request, Response, NextFunction } from 'express';
import { XmlgenConfig } from 'facturacionelectronicapy-xmlgen/dist/services/type.interface.';


const generateXMLDE = (req: Request, res: Response, next: NextFunction) => {

    var data :string = req.params.data; 
    var params :string = req.params.params;  
    var options :XmlgenConfig = JSON.parse(req.params.options);

    xmlgen.generateXMLDE(params, data, options).then(xml => {
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

