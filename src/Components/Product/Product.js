import React, {Component} from 'react'

export default class Product extends Component{
    constructor(){
        super()

        this.state = {}
    }

    render (){
        // console.log(this.props.inventoryItem)
        let {name,price,img} = this.props.inventoryItem
        return(
            <div>
                <h1>{name}</h1>
                <h3>{price}</h3>
                <img src={img} alt="item" />

            </div>
        )
    }
}