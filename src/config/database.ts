/* eslint-disable no-use-before-define */
import mysql from "mysql";
import env from "./env";

export default class Database {
  private static instance: Database;

  public connection: mysql.Connection;

  private constructor() {
    const databaseUrl = env.databaseUrl || "";
    this.connection = mysql.createConnection(databaseUrl);
    this.connection.connect();
  }

  public static getInstance(): Database {
    if (!this.instance) this.instance = new Database();
    return this.instance;
  }
}
