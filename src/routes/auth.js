import React from 'react';

const SignUp = React.lazy(() => import('../page/Authentication/SignUp'));
const Signin = React.lazy(() => import('../page/Authentication/SignIn'));

const route = [
    { path: '/auth/signup', exact: true, name: 'Signup 1', component: SignUp },
    { path: '/auth/signin', exact: true, name: 'Signin 1', component: Signin }
];

export default route;