import React from "react";
import Axios from "axios";
import baseURL from "../../Constant/env";

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
  readyOrder = () => {
    const readyToServe = this.state.comanda[0].status
    console.log(readyToServe);
    Axios({
      method: 'POST',
      url: baseURL + `/orders`,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        'Authorization': '778899'
      },
      data: JSON.stringify({
        name: this.state.comanda[0].name,
        status: this.state.comanda[0].status = 'listo',
        comanda: this.state.comanda[0]
      })
    })
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
                  <h5>Estatus: {item.status}</h5>
                  {
                      item.comanda.map((orderList)=>{
                          return (
                          <li className="list">
                          <p>{orderList.name}</p>
                          </li>
                          )
                      })
                  }
                  <button onClick={() => {this.readyOrder()}}>Listo</button>
                </li>
              );
            })
          : null}
      </div>
    );
  }
}
