import React from "react";
import Axios from "axios";
import baseURL from "../../Constant/env";

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
      console.log(res);
      
      const ordersFromKitchen = res.comanda;
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
                <li className="list">
                  <h6 className="form" key={item.key}>
                    {item.name}
                  </h6>
                  <h6 className="form" key={item.key}>
                      Estatus: {item.status}
                  </h6>
                  {
                      item.comanda.map((orderList)=>{
                          return (
                          <li className="list">
                          <p>{orderList.name}</p>
                          </li>
                          )
                      })
                  }
                  <button onClick={() => {}}>Cobrar</button>
                </li>
              );
            })
          : null}
      </div>
    );
  }
}