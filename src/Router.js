import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/home_page/HomePage';
import CartPage from './components/cart_page/CartPage';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/cart' component={CartPage} />
        </Switch>
    );
};

export default Router;