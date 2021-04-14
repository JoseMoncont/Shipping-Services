import { Router } from 'express';
import facturaController from '../controllers/facturaController';

class FacturaRoutes{
    public router: Router = Router();
    constructor() {
        this.config();

    }
    config(): void{
        this.router.get('/', facturaController.list);
        this.router.get('/:id', facturaController.getOne);
        this.router.post('/', facturaController.create);
        this.router.put('/:id', facturaController.update);
        this.router.delete('/:id', facturaController.delete);
    }
}
const facturaRoutes = new FacturaRoutes();
export default facturaRoutes.router