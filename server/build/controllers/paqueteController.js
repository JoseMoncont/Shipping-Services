"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PaqueteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const paquetes = yield database_1.default.query('SELECT * FROM paquete');
            res.json(paquetes);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const paquetes = yield database_1.default.query('SELECT * FROM paquete WHERE id = ?', [id]);
            if (paquetes.length > 0) {
                return res.json(paquetes[0]);
            }
            res.status(404).json({ text: "El Paquete no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO paquete set ?', [req.body]);
            res.json({ message: 'Paquete guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE paquete set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'Paquete Actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM paquete WhERE id =?', [id]);
            res.json({ message: 'Paquete eliminado' });
        });
    }
}
const paqueteController = new PaqueteController();
exports.default = paqueteController;
