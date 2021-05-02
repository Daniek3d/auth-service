import express, {Response, Request} from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';


export default class UsuarioControllers implements IControllerBase {
    private path = '';
    private router = express.Router()
    public regtistroPorPagina = 50;


    constructor() {
        this.initRoutes();
        
    }

    public initRoutes() {
        this.router.get(this.path + '', this.getUsuarios.bind(this))
    }

    private getUsuarios(req: Request, res: Response) {
        res.json({
            msg: 'getUsuarios'
        })
    }
    

}
