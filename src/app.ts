import express, { Application } from "express";
import addPlugins from "./config/addPlugins";
import addRouter from "./router";

const app: Application = express();
addPlugins(app);
addRouter(app);

export default app;
