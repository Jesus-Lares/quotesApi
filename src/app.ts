import express, { Application } from "express";
import addPlugins from "./config/addPlugins";
import addRouter from "./router";
import Database from "./config/database";

const app: Application = express();
addPlugins(app);
addRouter(app);
if (process.env.NODE_ENV !== "test") Database.getInstance();
export default app;
