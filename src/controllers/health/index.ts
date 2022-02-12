import { Request, Response } from "express";
import { error } from "../../services";

async function Health(req: Request, res: Response) {
  try {
    return res.status(200).json({
      status: "success",
      message: "Server is up and running",
    });
  } catch (err) {
    return error({ err, res });
  }
}

export { Health };
