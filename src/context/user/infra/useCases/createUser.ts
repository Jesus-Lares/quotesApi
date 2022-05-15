import UserRepository from "../../../application/UserRepository";
import { IUser, RoleUser } from "../../domain/IUser";

export default class CreateUserUseCase {
  async exec(user: IUser) {
    try {
      const registerDate = new Date().toISOString();
      const role = RoleUser.client;
      const userRepository = new UserRepository();
      const resultsUser = await userRepository.create({ ...user, registerDate, role });
      return resultsUser.insertId;
    } catch (error) {
      return { message: error };
    }
  }
}
