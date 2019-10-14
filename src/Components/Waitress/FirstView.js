import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './FirstView.css';

const View = () => {
    let tokenWaitress = 445566;
    localStorage.setItem("token", tokenWaitress)

    return (
        <div className="App">
            <header className="headerView">
                <img className='logoChurro' alt='' />
            </header>
            
                <div>
                    <nav>
                        <ul>
                        <p className="indicaionsFirst">Selecciona tu puesto</p>
                            <li className='navList'>
                                <Link to="/Mesero" className='buttonAccessA'>Mesero</Link>
                            </li>
                            <li className='navList'>
                                <Link to="/Cocinero" className='buttonAccessB'>Cocinero</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            
            <div className='backgroundLogin'></div>
        </div>
    );
}
export default View;