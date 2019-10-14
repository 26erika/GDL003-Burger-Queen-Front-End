import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WaitressRoutes from './WaitressRoutes';
import KitchenRoutes from '../Kitchen/KitchenRoutes';
import Test from './FirstView';

const Routes = () => (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
           <Route exact path='/' component={Test}/>
            <Route path='/Mesero' component={WaitressRoutes} />
            <Route path='/Cocinero' component={KitchenRoutes} />
        </Switch>
    </BrowserRouter>

);

export default Routes;