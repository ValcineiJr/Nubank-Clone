import { IRoute } from "../dtos/IRoute";
import { IconsNames } from "../dtos/IIcon";
import { Actions } from "../dtos/IAction";

import { Splash } from "@pages/auth/Splash";

export const authRoutes: IRoute[] = [
  {
    name: "Splash",
    component: Splash,
  },
];
