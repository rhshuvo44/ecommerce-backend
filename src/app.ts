import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { productRouter } from './app/module/product/product.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Asserment 2 E-commerce Backend Server');
});

export default app;
