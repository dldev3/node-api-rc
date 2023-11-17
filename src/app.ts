import express from 'express';
import { healthRouter, calculatorRouter } from './routes';
import { addTimestamp, logger } from './middlewares';

const app = express();
const port = 3000;

app.use(addTimestamp);
app.use(logger);

app.use('/health', healthRouter);
app.use('/calculator', calculatorRouter);



app.listen(port, () => {
    console.log(`Application is running at http://localhost:${port}`);
});
