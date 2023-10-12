import { Request, Response, NextFunction } from 'express';


import  xmlgen from 'facturacionelectronicapy-xmlsign';


type profile =  "prod"|"test";

const generateXMLSign = (req: Request, res: Response, next: NextFunction) => {

    var xml :string = req.params.xml;   

    xmlgen.signXML(xml, '../7155053_identity.p12' , '123456').then(xmlSigned => {
        console.log("XML firmado", xmlSigned)

        return res.status(200).json({
            message: xmlSigned
        });  
    }).catch(error => {
        res.json(error);
        console.log(error);
    });     

}



export default { generateXMLSign }; 