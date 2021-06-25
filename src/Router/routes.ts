import React, {lazy} from 'react';
const Home = lazy(() => import('../components/Home'));
const Map = lazy(() => import('../components/Map'));

export interface Iroute {
  name: string;
  path: string;
  component: React.FC;
}
export interface AppRoutes {
  [k: string]: Iroute;
}
export const routes: AppRoutes = {
  HOME: {
    name: 'home',
    path: '/',
    component: Home,
  },
  MAP: {
    name: 'map',
    path: '/map',
    component: Map,
  },
};
