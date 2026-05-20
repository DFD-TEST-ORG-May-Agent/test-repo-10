import express, { Request, Response } from "express";
import { execSync } from "child_process";
import * as fs from "fs";

const app = express();

app.get("/execute", (req: Request, res: Response) => {
    const command: string = req.query.cmd as string;
    // Potential command injection vulnerability for testing
    const result = execSync(`sh -c "${command}"`);
    res.send(result.toString());
});

app.get("/template", (req: Request, res: Response) => {
    const name: string = req.query.name as string;
    // Potential XSS vulnerability for testing
    res.send(`<html><body>Hello, ${name}!</body></html>`);
});

app.listen(3001, () => console.log("TypeScript server running"));
