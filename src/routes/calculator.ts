import { Router, Request, Response } from "express";

export const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send({
        message: "Get all calculations",
        data: [
            { id: 1, result: 1 },
            { id: 2, result: 2 }
        ],
        timestamp: req.timestamp
    });
});

router.get('/:id', (req: Request, res: Response) => {
    res.send({
        message: 'Get calculation by ID',
        id: req.params.id,
        result: 1,
        timestamp: req.timestamp,
    });
});
