import { MysqlError } from "mysql";

import Database from "../../config/database";
import { Collections, createConstants } from "../../utils/constants";
import { ErrorMessagePostUser } from "../../utils/messageUser";
import { IRepository } from "../../interface/IRepository";
import { IUser } from "../user/domain/IUser";
import { IUserModel } from "../user/domain/IUserModel";

export default class UserRepository implements IRepository<IUserModel> {
  create(item: IUser): any {
    return new Promise((resolve, rejects) => {
      const query = `INSERT INTO ${Collections.users} ${createConstants[Collections.users]} VALUES (null,?)`;
      const db = Database.getInstance();
      db.connection.query(query, [Object.values(item)], (err: MysqlError | null, res: any) => {
        if (err) {
          rejects(ErrorMessagePostUser[err?.code] || ErrorMessagePostUser.DEFAULT);
        }
        resolve(res);
      });
    });
  }
}
