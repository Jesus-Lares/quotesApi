import { Request, Response } from "express";
import StatusCode from "http-status-codes";
import JWT from "../../../../config/jwt";
import CreateUserUseCase from "../useCases/createUser";
import { IUser } from "../../domain/IUser";
import { ErrorMessagePostUser, MessagePostUser } from "../../../../utils/errorMessageUser";

class UserController {
  async store(req: Request, res: Response): Promise<Response> {
    try {
      const userBody = req.body as IUser;
      const createUserUseCase = new CreateUserUseCase();
      const userDB = await createUserUseCase.exec(userBody);
      const token = new JWT().generateToken({ id: userDB });
      return res.status(StatusCode.CREATED)
        .json({ token, message: MessagePostUser.CREATE_SUCCESS });
    } catch (error) {
      console.log("error", error);
      return res.status(StatusCode.BAD_REQUEST).json({ message: ErrorMessagePostUser.DEFAULT });
    }
  }
}

export default UserController;
