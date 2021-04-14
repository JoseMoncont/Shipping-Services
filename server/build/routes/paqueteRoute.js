"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paqueteController_1 = __importDefault(require("../controllers/paqueteController"));
class PaqueteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', paqueteController_1.default.list);
        this.router.get('/:id', paqueteController_1.default.getOne);
        this.router.post('/', paqueteController_1.default.create);
        this.router.put('/:id', paqueteController_1.default.update);
        this.router.delete('/:id', paqueteController_1.default.delete);
    }
}
const paqueteRoutes = new PaqueteRoutes();
exports.default = paqueteRoutes.router;
