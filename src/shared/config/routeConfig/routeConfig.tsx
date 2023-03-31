import { RouteProps } from 'react-router-dom';
import {
  AboutPage,
  MainPage,
  UserPage,
  NotFoundPage,
} from 'pages';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  USER = 'user',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.USER]: '/user',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.USER]: {
    path: RoutePath.user,
    element: <UserPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
