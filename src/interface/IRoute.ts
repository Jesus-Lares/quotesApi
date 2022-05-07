import { RequestHandler } from "express";

export type EnumMethodRoute = "get" | "post" | "put" | "delete";

export interface IRoute {
  path: string
  method: EnumMethodRoute
  handler: RequestHandler[]
}
