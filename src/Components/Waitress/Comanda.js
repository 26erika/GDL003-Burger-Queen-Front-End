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

    Axios({
      method: 'POST',
      url: baseURL + `/orders`,
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
        <p>Numero de mesa</p>
        <input
          type="text"
          defaultValue={this.props.table != null && this.props.table !== '0'
            ? this.props.table : ''}></input>
        <div>
          <ul>
            {this.props.itemsToOrder.map((item, index) => {
              return (
                <li>
                  {item.name} {"$ " + item.price}
                  <button onClick={() =>
                    this.props.removeItem(index)}>Eliminar</button>
                </li>
              );
            })}
          </ul>
          <button onClick={() => {
            this.sendOrder()
          }}>Enviar pedido a cocina</button>
          <p>Total: $ {this.calculateTotal()}</p>
          <button onClick={() => { }}>Cobrar cuenta</button>
        </div>
      </div>
    );
  }
}


export default Comanda;