import cors from 'cors';
import express, { Application, Request, Response } from 'express';
const app: Application = express();

app.use(express.json());
app.use(cors());


app.get('/', (req: Request, res: Response) => {
    res.send('Asserment 2 E-commerce Backend Server');
});

export default app;
