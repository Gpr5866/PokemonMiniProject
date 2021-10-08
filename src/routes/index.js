import React from 'react';
import { Redirect} from 'react-router-dom'
import { Route } from 'react-router-dom';

const halaman1 = React.lazy(() => import('../pages/halaman1'));
const halaman2 = React.lazy(() => import('../pages/halaman2'));
const mypokemon = React.lazy(() => import('../pages/mypokemon'));


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

const halaman2Routes = {
    path: '/detilpokemon/:nama_pokemon',
    name: 'Detil Pokemon',
    component: halaman2,
    route: Route
};

const mypokemonRoutes = {
    path: '/mypokemon',
    name: 'Detil Pokemon',
    component: mypokemon,
    route: Route
};

const AllWebRoute = [
    halaman1Routes,
    halaman2Routes,
    mypokemonRoutes
]

const MenuWbeRoute = [
    halaman1Routes,
    halaman2Routes,
    mypokemonRoutes
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