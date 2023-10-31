import  xmlgen from 'facturacionelectronicapy-xmlgen';
import  xmlSigned from 'facturacionelectronicapy-xmlsign';
import { Request, Response, NextFunction } from 'express';
import { XmlgenConfig } from 'facturacionelectronicapy-xmlgen/dist/services/type.interface.';
import path from 'path';
import utf8 from 'utf8';
import  qrgen  from 'facturacionelectronicapy-qrgen'; 

const generateXMLDE = (req: Request, res: Response, next: NextFunction) => {
    type profile =  "prod"|"test";
    var data :any = req.body.data; 
    var params :any = req.body.params;  
   
    console.log(params); 
    console.log(data); 

    xmlgen.generateXMLDE(params, data).then(xml => {
        
        var pathFile = path.resolve('7155053_identity.p12')

        xmlSigned.signXML(xml, pathFile , 'Sandra09').then(xmlSigned => {
            console.log("XML firmado", xmlSigned)
            xmlSigned = utf8.encode(xmlSigned); 
            var env = "test"; 
            qrgen.generateQR(xmlSigned, '1','', env as profile).then(xml => {
                console.log("XML con QR", xml)
                return res.status(200).json({
                    message: xml
                });          
            }).catch(error => {
                console.log(error);
                return res.status(500).json({
                    message: error
                });
            }); 

        }).catch(error => {
            console.log(error);
            return res.status(500).json({
                message: error
            });
        });      
       
    }).catch(error => {
        console.log(error);
        return res.status(500).json({
            message: error
        });         
    });     

}


export default {generateXMLDE}; 

