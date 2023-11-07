import { Request, Response, NextFunction } from 'express';
import  xmlgen from 'facturacionelectronicapy-xmlgen';


const generateXMLEvento = (req: Request, res: Response, next: NextFunction) => {

    var id :number = +req.params.id; 
    var data :string = req.params.data; 
    var params :string = req.params.params;  
 

    xmlgen.generateXMLEventoCancelacion(id, params, data).then(xml => {
       console.log(xml);
       return res.status(200).json({
        message: xml
    });  
    }).catch(error => {
        res.json(error);
        console.log(error);
    });     

}



export default {generateXMLEvento}; 