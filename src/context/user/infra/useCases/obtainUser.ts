import { IUser, RoleUser } from "../../domain/IUser";

export default class UserBuilder {
  private user: IUser;

  private _user: IUser;

  constructor() {
    this._user = {
      id: null,
      name: "",
      email: "",
      password: "",
      registerDate: new Date().toISOString(),
      role: RoleUser.client,
      state: true,
      dailyQuote: null,
      allQuotes: true,
    };
    this.user = { ...this._user };
  }

  id(id: number): UserBuilder {
    this.user.id = id;
    return this;
  }

  name(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }

  email(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  password(password: string): UserBuilder {
    this.user.password = password;
    return this;
  }

  registerDate(registerDate: string): UserBuilder {
    this.user.registerDate = registerDate;
    return this;
  }

  role(role: RoleUser): UserBuilder {
    this.user.role = role;
    return this;
  }

  state(state: boolean): UserBuilder {
    this.user.state = state;
    return this;
  }

  dailyQuote(dailyQuote: string): UserBuilder {
    this.user.dailyQuote = dailyQuote;
    return this;
  }

  allQuotes(allQuotes: boolean): UserBuilder {
    this.user.allQuotes = allQuotes;
    return this;
  }
}
