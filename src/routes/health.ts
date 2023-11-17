import { Router, Request, Response } from "express";

export const router = Router();

router.get('/', (req: Request, res: Response) => {
    // throw new Error('Application Error');
    if (req.protocol === 'https') {
        res.send(
            {
                message: "OK",
                security: "Connection is secure",
                timestamp: req.timestamp
            });

    } else {
        res.send(
            {
                message: "OK",
                security: "Connection is not secure",
                timestamp: req.timestamp
            });
    }
})


