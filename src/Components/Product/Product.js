import React, {Component} from 'react'
import "./product.css"

export default class Product extends Component{
    constructor(){
        super()

        this.state = {}
    }

    render (){
        console.log(this.props.inventoryItem)
        let {name,price,img,id} = this.props.inventoryItem
        return(
            <div className="product-container">
                <img id="product-img" src={img} alt="item" />
                <div className="product-info">
                <h3>{name}</h3>
                <h3>${price}</h3>
                </div>
                <button onClick={() => this.props.deleteProduct(this.props.inventoryItem.id)}>Delete</button>
                <button onClick={() => this.props.selectForEditing(id)}>Edit</button>

            </div>
        )
    }
}