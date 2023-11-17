import { Router, Request, Response } from "express";
import { CalculatorRequestBody } from "../types";

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

router.post("/", (req: Request<{}, any, CalculatorRequestBody>, res: Response) => {

    const { operator, operand1, operand2 } = req.body;
    let result: number | string;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;

        default:
            result = "Invalid operator"
            break;
    }

    res.send({
        message: "Create new calculation",
        timestamp: req.timestamp,
        result
    })
});
