import React from 'react';
import {NativeRouter, Route} from 'react-router-native';
import {routes, Iroute} from './routes';
const appRoutes: Iroute[] = Object.values(routes);
const keyPrefix = 'MIBICI_';
const Router: React.FC = () => (
  <NativeRouter>
    {appRoutes.map(({name, path, component}: Iroute) => (
      <Route
        key={`${keyPrefix}${name}`}
        exact
        path={path}
        component={component}
      />
    ))}
  </NativeRouter>
);

export default Router;
