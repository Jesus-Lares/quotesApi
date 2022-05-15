import env from "../../../../config/env";
import { IRoute, EnumMethodRoute } from "../../../../interface/IRoute";
import UserController from "../controllers/user.controllers";

const URL_BASE = `${env.initialRoute}/user`;
const userController = new UserController();
const routes: IRoute[] = [
  {
    path: URL_BASE,
    method: EnumMethodRoute.POST,
    handler: [userController.store],
  },
];

export default routes;
