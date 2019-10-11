import React, {Component} from 'react'

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

    render (){
        console.log(this.state)
        return(
            <div>
                Form
                <input placeholder="img url" onChange={e => this.handleImgChange(e)}></input>
                <input placeholder="product name" onChange={e => this.handleNameChange(e)}></input>
                <input placeholder="price" onChange={e => this.handlePriceChange(e)}></input>
                <button onClick={() => this.cancelButton()}>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}