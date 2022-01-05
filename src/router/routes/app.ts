import { IRoute } from "../dtos/IRoute";
import { IconsNames } from "../dtos/IIcon";
import { Actions } from "../dtos/IAction";

import { Home } from "@pages/app/Home";

export const appRoutes: IRoute[] = [
  {
    name: "Home",
    component: Home,
  },
];
