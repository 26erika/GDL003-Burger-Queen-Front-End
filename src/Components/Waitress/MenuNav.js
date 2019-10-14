import React from "react";
import Axios from "axios";
import Comanda from "./Comanda";
import baseURL from "../../Constant/env"
import "./Menu.css";

export default class MenuNav extends React.Component {
  state = {
    categories: [],
    subCategory: [],
    itemsToOrder: []
  };

  componentDidMount() {
    Axios.get( baseURL +`/products`, {
        headers: {
            'Authorization': '445566'
        }
    }).then(res => {

        const products = res.data;
      let categories = [];
      let categoryNames = [];
      let i;

      //obtiene el nombre unico de cada categoria sin repetir
      for (i = 0; i < products.length; i++) {
        if (!categoryNames.includes(products[i].category))
          categoryNames.push(products[i].category);
      }
      //inicializa el objeto categorias en la forma requerida
      for (i = 0; i < categoryNames.length; i++) {
        categories.push({ name: categoryNames[i], subCategories: [] });
      }
      //llena el objeto de categorias con sus subcategorias
      for (i = 0; i < products.length; i++) {
        for (let j = 0; j < categories.length; j++) {
          if (products[i].category === categories[j].name) {
            categories[j].subCategories.push({
              name: products[i].name,
              price: products[i].price,
              url: products[i].image,
              id: products[i].id
            });
          }
        }
      }
      this.setState({ categories });
    });
  }

  orderItem = item => {
    const orderList = [...this.state.itemsToOrder];
    orderList.push(item);
    this.setState({ itemsToOrder: orderList });
  };
  
  removeItem = index => {
    const newList = this.state.itemsToOrder
    const newPrice = newList[index].price
    this.state.itemsToOrder.splice(index, 1);
    this.setState({
        total: this.state.total - newPrice,
        list: newList
    })

  }

  render() {
    var tokenGuardado = localStorage.getItem("token")
    console.log(tokenGuardado)
    const {id} = this.props.match.params
    return (
      <div>
        <ul className="navMenu">
          {this.state.categories.map(item => {
              console.log(item);
              
            return (
              <li >
                <button className="blockButtons"
                  key={item.key}
                  onClick={() =>
                    this.setState({ subCategory: item.subCategories })
                  }
                >
                  { item.name.toUpperCase() } 
                </button>
              </li>
            );
          })}
        </ul>
        <div>
          {this.state.subCategory
            ? this.state.subCategory.map(item => {
                return (
                  <li className="list">
                    <img className="image" src={item.url} alt=""></img>
                    <h6 className="nameForm" key={item.key}>
                      {item.name}{ " $" + item.price}
                    </h6>
                    
                    <button className="buttonOrder" onClick={() => this.orderItem(item)}>
                      Ordenar
                    </button>
                  </li>
                );
              })
            : null}
        </div>
        <div>
          {this.state.itemsToOrder.length > 0 ? (
            <Comanda 
            itemsToOrder={this.state.itemsToOrder} 
            removeItem={this.removeItem} 
            table={id}/>
          ) : null}
        </div>
      </div>
    );
  }
}