export enum RoleUser {
  client = "client",
  admin = "admin",
}

export interface IUser {
  id?: number | null,
  name: string;
  email: string;
  password: string;
  registerDate?: string;
  role?: RoleUser;
  state?: boolean;
  dailyQuote?: string | null;
  allQuotes?: boolean;
}
