import { Request, Response, NextFunction } from 'express';
import path from 'path';
import utf8 from 'utf8';
import  xmlgen from 'facturacionelectronicapy-xmlsign';


type profile =  "prod"|"test";

const generateXMLSign = (req: Request, res: Response, next: NextFunction) => {

    var xml :string = req.body.xml;   

    var pathFile = path.resolve('7155053_identity.p12')

    xmlgen.signXML(xml, pathFile , 'Sandra09').then(xmlSigned => {
        console.log("XML firmado", xmlSigned)
        xmlSigned = utf8.encode(xmlSigned); 
        return res.status(200).json({
            message: xmlSigned
        });  
    }).catch(error => {
        console.log(error);
        return res.status(500).json({
            message: error
        });
    });     

}



export default { generateXMLSign }; 