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

                <li className="listOrders">
                  <h6 className="tableName" key={item.key}>
                    {item.name}
                  </h6>
                  <h5 className="tableName">Estatus: {item.status}</h5>
                  {
                      item.comanda.map((orderList)=>{
                          return (
                          <li className="productsOrder">
                          <p>{orderList.name}</p>
                          </li>
                          )
                      })
                  }
                  <button className="buttonFinish" onClick={() => {this.readyOrder()}}>Listo</button>
                </li>
              );
            })
          : null}
      </div>
    );
  }
}
