import request from "supertest";
import { StatusCodes } from "http-status-codes";

import env from "../../config/env";
import app from "../../app";
import httpServer from "../../index";
import Database from "../../config/database";
import UserFactory from "../mock/factories/userFactory";
import { MessagePostUser } from "../../utils/errorMessageUser";

describe("User routes", () => {
  let db: any;

  beforeAll(async () => {
    db = Database.getInstance();
  });

  afterAll(() => {
    db.connection.end();
    httpServer.close();
  });
  const URL_BASE = `${env.initialRoute}/user`;
  const mockUser = UserFactory.createDefault();

  test(`@POST ${URL_BASE}. It should return data if the user was created correctly`, async () => {
    const response = await request(app).post(URL_BASE).send(mockUser);
    expect(response.body.message).toBe(MessagePostUser.CREATE_SUCCESS);
    expect(response.statusCode).toBe(StatusCodes.CREATED);
  });
});
