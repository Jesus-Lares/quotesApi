export enum Collections {
  users = "Users",
  quotes = "Quotes",
  shuffle = "ViewQuotes",
}

type typesObjectString = {
  [key: string]: string;
};
export const createConstants: typesObjectString = {
  Users: "(id,name,email,password,registerDate,role)",
  Quotes: "(id,quote,writer,role,idUser,registerDate)",
  ViewQuotes: "(userId,quoteId)",
};

export enum EXPIRETIME {
  H1 = 60 * 60,
  H24 = 24 * H1,
  M15 = H1 / 4,
  M20 = H1 / 3,
  D3 = H24 * 3,
  M1 = H24 * 30,
}
