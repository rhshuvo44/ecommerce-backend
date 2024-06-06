import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { orderRouter } from './app/module/order/order.routes';
import { productRouter } from './app/module/product/product.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());
// app route 
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
// root route 
app.get('/', (req: Request, res: Response) => {
  res.send('Asserment 2 E-commerce Backend Server');
});
// Not Found Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});
export default app;
