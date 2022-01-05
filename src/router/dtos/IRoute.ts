import { ComponentType } from "react";

import { Actions } from "../dtos/IAction";
import { IconsNames } from "./IIcon";

export interface IIcon {
  key: string;
  action?: Actions;
  icon: IconsNames;
}

export interface IRoute {
  name: string;
  component: ComponentType<any>;
  subPages?: ISubRoute[];
}

export interface ISubRoute {
  name: string;
  label: string;
  component: ComponentType<any>;
  icons?: IIcon[];
  subPages?: ISubRoute[];
}

export interface RouteProps {
  key: string;
  name: string;
  params?: {
    parent?: string;
    icons?: IIcon[];
    label?: string;
  };
}
