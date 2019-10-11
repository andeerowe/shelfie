import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {}
    }

    deleteProduct = (id) => {
        console.log('fired')
        axios.delete(`/api/product/${id}`)
        .then(this.props.getInventory())
        .catch(err => console.log(err))
    }

    render (){
        return(
            <div>
                
                {this.props.inventoryList.map((e, i) => {
                    return <Product
                                key={i}
                                inventoryItem={e}
                                deleteProduct={this.deleteProduct}
                            />
                })}
            </div>
        )
    }
}