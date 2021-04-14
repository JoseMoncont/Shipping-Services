import {Request, Response} from 'express';
import db from '../database';

class PaqueteController {

    public async list(req: Request, res: Response) {
        const paquetes= await db.query('SELECT * FROM paquete');
        res.json(paquetes);

    }
    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const paquetes = await db.query('SELECT * FROM paquete WHERE id = ?', [id]);
        if (paquetes.length > 0){
            return res.json(paquetes[0]);
        }
        res.status(404).json({text: "El Paquete no existe"});
    }
    
    public async create (req: Request, res: Response): Promise<void>{
        await db.query('INSERT INTO paquete set ?',[req.body])
        res.json({message: 'Paquete guardado'});
    }
    public async update (req: Request, res: Response){
        const {id} = req.params;
        await db.query('UPDATE paquete set ? WHERE id = ?',[req.body, id])
        res.json({message:'Paquete Actualizado'});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await db.query('DELETE FROM paquete WhERE id =?', [id]);
        res.json({message: 'Paquete eliminado'});

    }

    

}
const paqueteController = new PaqueteController();
export default paqueteController;