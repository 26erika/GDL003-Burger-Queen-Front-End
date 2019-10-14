import React, { Component } from "react";
import baseURL from "../../Constant/env";
import Axios from "axios";
import "./Menu.css";

class Comanda extends Component {

  calculateTotal = () => {
    let total = 0;
    for (let index = 0; index < this.props.itemsToOrder.length; index++) {
      total += this.props.itemsToOrder[index].price;
    }
    return total;
  };

  sendOrder = () => {
    let orderToSend = this.props.itemsToOrder
    console.log(orderToSend);


    Axios({
      method: 'POST',
      url: baseURL + `/orders`,
      autorizacion: localStorage.token,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Authorization': '445566'
      },
      data: JSON.stringify({
        name: "Mesa" + this.props.table,
        status: 'pendiente',
        comanda: orderToSend
      })
    })
  }

  render() {
    return (
      <div className='listOrder'>
        <p>Mesa / Nombre</p>
        <input
          type="text" className="text"
          defaultValue={this.props.table != null && this.props.table !== '0'
            ? this.props.table : ''}></input>
        <div>
          <ul>
            {this.props.itemsToOrder.map((item, index) => {
              return (
                <li className="orderForm">
                  <button className="buttonEliminate" onClick={() =>
                    this.props.removeItem(index)}>x</button>
                  {item.name}{" $" + item.price}
                </li>
              );
            })}
          </ul>
          <button className="buttonSend" onClick={() => {
            this.sendOrder()
          }}>Enviar a cocina</button>
          <p className="text">Total: ${this.calculateTotal()}</p>
        </div>
      </div>
    );
  }
}


export default Comanda;