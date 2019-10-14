import React, { Component } from 'react';
import Menu from './MenuNav';
import menuChurros from '../Menu';
import Comanda from './Comanda';



class NewOrder extends Component {
    constructor(props) {
        super(props)
        this.orderProducts = this.orderProducts.bind(this);
        this.state = {
            total: 0,
            order: [],
        };
    }

    getId = (id) => {

        const idProducts = menuChurros.subCategories.find(item => item.id === id)
        const orderContainer = this.state.order

        orderContainer.push({
            name: idProducts.name,
            price: idProducts.price
        })


        this.setState({
            total: this.state.total + idProducts.price,
            order: orderContainer
        });
    }

    removeValues = (index) => {
        const orderContainer = this.state.list
        const price = orderContainer[index].price
        orderContainer.splice(index, 1)
        this.setState({
            total: this.state.total - price,
            order: orderContainer
        })
    }

    render() {

        const orderProducts = () => {
            console.log("dasdasds")
        }

        return <div>
            <p>churritos</p>

            <Menu
                ddd={"asdasd"}
                action={this.orderProducts}
            />

            <Comanda submitValuesMethod={this.submitValues}
                removeValuesMethod={this.removeValues}
                total={this.state.total}
                order={this.state.order} />

        </div>
    }
}

export default NewOrder