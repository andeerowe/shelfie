import React, {Component} from 'react'
import Product from '../Product/Product'

export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {}
    }

    render (){
        return(
            <div>
                Dashboard
                {this.props.inventoryList.map((e, i) => {
                    return <Product
                                key={i}
                                inventoryItem={e}
                            />
                })}
            </div>
        )
    }
}