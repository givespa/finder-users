/*
* routes.
* Path configuration file,
* here are added the components with their routes.
* author: Gian Vespa
*/

import Home from '../page/home';
import Details from '../page/details';

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            exact: true
        }
    },
    {
        path: '/detail',
        name: 'detail',
        component: Details,
        meta: {
            exact: false
        }
    }
]

export default {
    routes
};