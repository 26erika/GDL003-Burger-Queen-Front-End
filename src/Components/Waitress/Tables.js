import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../Waitress/Tables.css'

class Tables extends Component {
    render() {
        return (
            <div>
                <h1 className="indicaions">Selecciona una mesa</h1>
                <div className='styleTables'>
                    <div className='textTables'
                        onClick={() => this.props.history.push('/Nueva_Orden/10')}> Mesa10
                    </div>
                    <div className='textTables'
                        onClick={() => this.props.history.push('/Nueva_Orden/11')}> Mesa11
                    </div>
                    <div className='textTables'
                        onClick={() => this.props.history.push('/Nueva_Orden/12')}> Mesa12
                    </div>
                    <div className='textTables'
                        onClick={() => this.props.history.push('/Nueva_Orden/20')}> Mesa20
                    </div>
                    <div className='textTables'
                        onClick={() => this.props.history.push('/Nueva_Orden/21')}> Mesa21
                    </div>
                    <div className='textTables'
                        onClick={() => this.props.history.push('/Nueva_Orden/22')}> Mesa22
                    </div>
                </div>
            </div >
        )
    }
}
export default Tables;