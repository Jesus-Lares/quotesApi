import request from "supertest";
import env from "../config/env";
import app from "../app";

describe("GET /", () => {
  test("Return correct data with fetch GET /", async () => {
    const response = await request(app).get(`${env.initialRoute}/`);

    expect(response.status).toBe(200);
    expect(response.type).toBe("text/html");
    expect(response.text).toBe("API QUOTES");
  });
});
