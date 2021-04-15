import {Request, Response} from 'express';
import db from '../database';

class ClienteController {

    public async list(req: Request, res: Response) {
        const clientes= await db.query('SELECT * FROM cliente');
        res.json(clientes);

    }
    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const clientes = await db.query('SELECT * FROM cliente WHERE id = ?', [id]);
        if (clientes.length > 0){
            return res.json(clientes[0]);
        }
        res.status(404).json({text: "El Ciente no existe"});
    }
    
    public async create (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO cliente set ?',[req.body])
        res.json({message: 'Cliente guardado'});
    }
    public async update (req: Request, res: Response){
        const {id} = req.params;
        await db.query('UPDATE cliente set ? WHERE id = ?',[req.body, id])
        res.json({message:'Cliente Actualizado'});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM cliente WhERE id =?', [id]);
        res.json({message: 'Cliente eliminado'});

    }

    

}
const clienteController = new ClienteController();
export default clienteController;