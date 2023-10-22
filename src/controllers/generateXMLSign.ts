import { Request, Response, NextFunction } from 'express';


import  xmlgen from 'facturacionelectronicapy-xmlsign';


type profile =  "prod"|"test";

const generateXMLSign = (req: Request, res: Response, next: NextFunction) => {

    var xml :string = req.body.xml;   

    xmlgen.signXML(xml, '../7155053_identity.p12' , 'Sandra09').then(xmlSigned => {
        console.log("XML firmado", xmlSigned)

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