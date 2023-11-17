import { Request, Response, NextFunction } from 'express';

export function checkHttpS(req: Request, res: Response, next: NextFunction) {
    if (req.protocol === 'https') {
        res.send("Secure connection")
    }

    res.send("Not secure connection")

    next();
}

