import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import {
  account,
  anchor,
  createAccount,
  createUserWallet,
  getAnchorInfo,
  getAsset,
  getAuthToken,
  login,
} from "./api";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT ?? 8000;

app.get("/", (req: Request, res: Response) => {
  createUserWallet().then((wallet) => res.json(wallet));
});

app.get("/home", (req: Request, res: Response) => {
  anchor.getServicesInfo().then((config) => res.json(config));
});

app.get("/account", (req: Request, res: Response) => {
  createAccount().then((account) => res.json(account));
});

app.get("/anchor", (req: Request, res: Response) => {
  getAnchorInfo().then((info) => res.json(info));
});

app.get("/asset", (req: Request, res: Response) => {
  getAsset("USDC").then((info) => res.json(info));
});

app.get("/token", (req: Request, res: Response) => {
  getAuthToken("USDC").then((info) => res.json(info));
});

app.get("/login", (req: Request, res: Response) => {
  login().then((authToken) => res.json({ authToken }));
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
