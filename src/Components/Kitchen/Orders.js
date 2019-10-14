import React from "react";
import Axios from "axios";
import baseURL from "../../Constant/env";
import '../Waitress/Tables.css';

export default class KitchenOrders extends React.Component {
  state = {
    comanda: [],
    orderStatus: []
  };

  componentDidMount() {
    Axios.get(baseURL + `/orders`, {
      headers:{
        'Authorization': '778899'
      }
    }).then(res => {
      let comanda = [];
      const orders = res.data;
      for(let i=0; i<orders.length;i++){
        comanda.push(orders[i]);
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
                  {
                      item.comanda.map((orderList)=>{
                          return (
                          <li className="productsOrder">
                          <p>{orderList.name}</p>
                          </li>
                          )
                      })
                  }
                  <button onClick={() => {}}>Preparando</button>
                  <button onClick={() => {}}>Listo</button>
                </li>
              );
            })
          : null}
      </div>
    );
  }
}
