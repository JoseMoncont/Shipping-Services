import { Router } from 'express';
import paqueteController from '../controllers/paqueteController';

class PaqueteRoutes{
    public router: Router = Router();
    constructor() {
        this.config();

    }
    config(): void{
        this.router.get('/', paqueteController.list);
        this.router.get('/:id', paqueteController.getOne);
        this.router.post('/', paqueteController.create);
        this.router.put('/:id', paqueteController.update);
        this.router.delete('/:id', paqueteController.delete);
    }
}
const paqueteRoutes = new PaqueteRoutes();
export default paqueteRoutes.router;