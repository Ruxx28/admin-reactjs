import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('../page/Dashboard'));
const Product = React.lazy(() => import('../page/Product'));
const Category = React.lazy(() => import('../page/Category'));
const Supplier = React.lazy(() => import('../page/Supplier'));

const routes = [
    
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/product', exact: true, name: 'Product', component: Product },
    { path: '/category', exact: true, name: 'Category', component: Category },
    { path: '/supplier', exact: true, name: 'Supplier', component: Supplier },

    { path: '/order', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/sale', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/customer', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/setting', exact: true, name: 'Dashboard', component: Dashboard }
];

export default routes;