  
import {Request, Response} from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'API esta en /api/clientes'});
        res.json({text: 'API esta en /api/paquetes'});
        res.json({text: 'API esta en /api/facturas'});

    } 

}
export const indexController = new IndexController();