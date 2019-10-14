import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import WaitressRoutes from './WaitressRoutes';
import KitchenRoutes from '../Kitchen/KitchenRoutes';
import Test from './FirstView';

const Routes = () => (

    <HashRouter basename='/'>
        <Switch>
           <Route exact path='/' component={Test}/>
            <Route path='/Mesero' component={WaitressRoutes} />
            <Route path='/Cocinero' component={KitchenRoutes} />
            
        </Switch>
    </HashRouter>

);

export default Routes;