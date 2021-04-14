"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'API esta en /api/clientes' });
        res.json({ text: 'API esta en /api/paquetes' });
        res.json({ text: 'API esta en /api/facturas' });
    }
}
exports.indexController = new IndexController();
