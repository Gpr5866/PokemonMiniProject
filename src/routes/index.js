import React from 'react';
import { Redirect} from 'react-router-dom'
import { Route } from 'react-router-dom';

const halaman1 = React.lazy(() => import('../pages/halaman1'));

const rootRoute = {
    path: '/',
    exact: true,
    component: () => <Redirect to="/halaman1" />,
    route: Route,
};

const halaman1Routes = {
    path: '/halaman1',
    name: 'Home',
    component: halaman1,
    route: Route
};

const AllWebRoute = [
    halaman1Routes
]

const MenuWbeRoute = [
    halaman1Routes
] 

const allRoutes = [
    rootRoute,
 ...AllWebRoute
]

const flattenRoutes = routes => {
    let flatRoutes = [];

    routes = routes || [];
    routes.forEach(item => {
        flatRoutes.push(item);

        if (typeof item.children !== 'undefined') {
            flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
        }
    });
    return flatRoutes;
};

const allFlattenRoutes = flattenRoutes(allRoutes);
export { allRoutes, allFlattenRoutes}