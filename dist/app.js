"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const product_routes_1 = require("./app/module/product/product.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/products", product_routes_1.productRouter);
app.get('/', (req, res) => {
    res.send('Asserment 2 E-commerce Backend Server');
});
exports.default = app;
