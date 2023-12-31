import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';


import routesConsultaDE from './routes/consultaDE';
import routesenviaraDE from './routes/enviarDE';
import routeseventosDE from './routes/eventosDE';

import generateQR from './routes/qrgen';

import generateXMLSign from './routes/generateXMLSign';

import generateXMLDE from './routes/generateXMLDE';
import generateXMLEvento from './routes/generateXMLEvento';

const router: Express = express();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
router.use('/api/consulta', routesConsultaDE);
router.use('/api/enviar', routesenviaraDE);
router.use('/api/evento', routeseventosDE);

router.use('/api/qr/', generateQR);

router.use('/api/signed', generateXMLSign);

router.use('/api/generar', generateXMLDE);
router.use('/api/evento', generateXMLEvento);


/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});


/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));