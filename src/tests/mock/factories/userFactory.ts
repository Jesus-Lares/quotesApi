import faker from "@faker-js/faker";
import UserBuilder from "../builders/userBuilders";
import { IUser } from "../../../context/user/domain/IUser";

export default class UserFactory {
  static _createDefault(): UserBuilder {
    const builder = new UserBuilder();
    builder
      .name(faker.name.findName())
      .email(faker.internet.email())
      .password(faker.internet.password());
    return builder;
  }

  static createDefault(): IUser {
    const builder = UserFactory._createDefault();
    return builder.build();
  }

  static generateUser(userArray: Array<any>, id: number): IUser {
    const builder = new UserBuilder();
    const user = builder.generate(userArray, id);
    return user;
  }
}
