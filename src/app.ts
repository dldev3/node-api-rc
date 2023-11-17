import express from 'express';
import { healthRouter, calculatorRouter } from './routes';

const app = express();
const port = 3000;

app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);









app.listen(port, () => {
    console.log(`Application is running at http://localhost:${port}`);
});
