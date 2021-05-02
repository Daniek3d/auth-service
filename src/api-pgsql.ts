import dotnev from 'dotenv';
import cors from 'cors';
import express from 'express';


import UsuarioControllers from './controllers/usuarios';
import loggerMiddleware from './middleware/logger';
import App from './models/app'


dotnev.config();

const app = new App({
    port: Number(process.env.PORT),
    controllers: [
        new UsuarioControllers(),
    ],
    middleWares: [
        express.json(),
        loggerMiddleware,
        cors({ origin: true, credentials: true  })
    ]
})


app.listen();
