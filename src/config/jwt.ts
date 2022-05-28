import jwt from "jsonwebtoken";
import env from "./env";
import { EXPIRETIME } from "../utils/constants";

class JWT {
  private secreteKey = env.secretToken as string;

  generateToken(data: Object, expiresIn: number = EXPIRETIME.M1) {
    return jwt.sign(
      data,
      this.secreteKey,
      { expiresIn },
    );
  }
}

export default JWT;
