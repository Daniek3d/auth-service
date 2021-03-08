import express from 'express';
import { Application } from 'express';

export default class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express();
        this.port = appInit.port;
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.assets();
        this.template();
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/api/v1/usuarios', controller.router);
        })
    }

    private assets() {
        // this.app.use(compression());
        this.app.use('/api/v1/apioc', express.static('public/apidoc'));
        // this.app.use(express.static('views'))
    }

    private template() {
        this.app.set('home engine', 'pug');
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App api-eventos http://localhost:${this.port}`);
        })
    }
}

