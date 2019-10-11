import React, {Component} from 'react'
import axios from 'axios'

export default class Form extends Component{
    constructor(){
        super()

        this.state = {
            img: '',
            productName: '',
            productPrice: 0
        }
    }

    handleImgChange = e => {
        this.setState({
            img: e.target.value
        })
    }

    handleNameChange = e => {
        this.setState({
            productName: e.target.value
        })
    }

    handlePriceChange = e => {
        this.setState({
            productPrice: e.target.value
        })
    }

    cancelButton = () => {
        this.setState({
            img: '',
            productName: '',
            productPrice: 0
        })
    }

    addToInventory = () => {
        console.log('clicked')
        const newItem = {
            name: this.state.productName,
            img: this.state.img,
            price: this.state.productPrice
        }
        axios.post('/api/product', newItem).then(res => {
            this.props.getInventory()
            this.cancelButton()
            })
    }

    render (){
        console.log(this.state)
        return(
            <div>
                Form
                <input placeholder={this.state.img} onChange={e => this.handleImgChange(e)}></input>
                <input placeholder={this.state.productName} onChange={e => this.handleNameChange(e)}></input>
                <input placeholder={this.state.productPrice} onChange={e => this.handlePriceChange(e)}></input>
                <button onClick={() => this.cancelButton()}>Cancel</button>
                <button onClick={() => this.addToInventory()}>Add to Inventory</button>
            </div>
        )
    }
}