import { IRoute } from "../interface/IRoute";
import UserRoutes from "../context/user/infra/routes/userRoutes";

const routes: IRoute[] = [
  ...UserRoutes,
];

export default routes;
