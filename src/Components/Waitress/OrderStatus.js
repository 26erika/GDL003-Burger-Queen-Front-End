import React from "react";
import Axios from "axios";
import baseURL from "../../Constant/env";
import "./Tables.css";

export default class OrderStatus extends React.Component {
  state = {
    ordersFromKitchen: [],
    comanda: []
  };

  componentDidMount() {
    Axios.get(baseURL + `/orders`, {
      headers: {
          'Authorization': '778899'
      }
      }).then(res => {
      let comanda = [];
      const ordersFromKitchen = res.data;
      for(let i=0; i<ordersFromKitchen.length;i++){
        comanda.push(ordersFromKitchen[i]);
      }
      this.setState({ comanda });
    });
    
  }

  render() {
    return (
      <div>
        {this.state.comanda
          ? this.state.comanda.map(item => {
              return (
                <li className="listOrders">
                  <h6 className="tableName" key={item.key}>
                    {item.name}
                  </h6>
                  <h6 className="tableName" key={item.key}>
                      Estatus: {item.status}
                  </h6>
                  {
                      item.comanda.map((orderList)=>{
                          return (
                          <li className="productsOrder">
                          <p>{orderList.name}</p>
                          </li>
                          )
                      })
                  }
                  <button className="buttonFinish" onClick={() => {}}>Cobrar</button>
                </li>
              );
            })
          : null}
      </div>
    );
  }
}