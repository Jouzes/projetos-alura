import type { Request, Response } from "express";

export class IndexController {
  public static index(req: Request, res: Response): void {
    res.send("server on");
  }
}