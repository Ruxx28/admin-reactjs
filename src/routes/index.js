import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Home = React.lazy(() => import('../page/Home'));
const Product = React.lazy(() => import('../page/Product'));
const CreateProduct = React.lazy(() => import('../page/Product/addProduct')); 

const Category = React.lazy(() => import('../page/Category'));
const Supplier = React.lazy(() => import('../page/Supplier'));
const PromoCode = React.lazy(() => import('../page/PromoCode'));
const Order = React.lazy(() => import('../page/Order'));
const User = React.lazy(() => import('../page/User'));
const Settings = React.lazy(() => import('../page/Settings'));

const routes = [
    
    { path: '/home', exact: true, name: 'Home', component: Home },
    { path: '/product', exact: true, name: 'Product', component: Product },
    { path: '/product/create', exact: true, name: 'CreateProduct', component: CreateProduct },

    { path: '/category', exact: true, name: 'Category', component: Category },
    { path: '/supplier', exact: true, name: 'Supplier', component: Supplier },
    { path: '/order', exact: true, name: 'Order', component: Order },
    { path: '/promocode', exact: true, name: 'PromoCode', component: PromoCode },
    { path: '/user', exact: true, name: 'User', component: User },
    { path: '/setting', exact: true, name: 'Settings', component: Settings }
];

export default routes;