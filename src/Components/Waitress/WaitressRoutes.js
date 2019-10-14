import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Tables from './Tables';
import Menu from './MenuNav';
import OrderStatus from './OrderStatus';
import './WaitressRoute.css'


class WaitressRoutes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <header className="App-header">
                        <ul className='navRouter'>
                            <li><img className='logo' alt="" /></li>
                            <li className='appNav'><NavLink to='/Mesas'>Mesas</NavLink></li>
                            <li className='appNav'><NavLink to='/Nueva_Orden/0'>Nueva Orden</NavLink></li>
                            <li className='appNav'><NavLink to='/Estatus_de_Orden'>Estatus de Orden</NavLink></li>
                        </ul>
                    </header>
                    <Route path="/Mesas" component={Tables} />
                    <Route path="/Nueva_Orden/:id" component={Menu} />
                    <Route path="/Estatus_de_Orden" component={OrderStatus}/>
                </Router>
                <p className="welcome">¡Hola!</p>
            </div>
        )
    }
}

export default WaitressRoutes;