import {Request, Response} from 'express';
import db from '../database';

class FacturaController {

    public async list(req: Request, res: Response) {
        const facturas= await db.query('SELECT * FROM factura');
        res.json(facturas);

    }
    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const facturas = await db.query('SELECT * FROM factura WHERE id = ?', [id]);
        if (facturas.length > 0){
            return res.json(facturas[0]);
        }
        res.status(404).json({text: "La factura no existe"});
    }
    
    public async create (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO factura set ?',[req.body])
        res.json({message: 'Factura guardada'});
    }
    public async update (req: Request, res: Response){
        const {id} = req.params;
        await db.query('UPDATE factura set ? WHERE id = ?',[req.body, id])
        res.json({message:'Factura Actualizada'});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM factura WhERE id =?', [id]);
        res.json({message: 'Factura eliminada'});

    }

    

}
const facturaController = new FacturaController();
export default facturaController;