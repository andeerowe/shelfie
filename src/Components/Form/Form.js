import React, {Component} from 'react'
import axios from 'axios'
import './form.css'

export default class Form extends Component{
    constructor(){
        super()

        this.state = {
            img: '',
            productName: '',
            productPrice: 0,
            currentId: 0,
            editing: false
        }
    }

    componentDidUpdate = (oldPropsObj) => {
        console.log(oldPropsObj, this.props)
        if (oldPropsObj !== this.props){
            this.setState({
                currentId: this.props.current,
                editing: true
            })

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

    saveChanges = (id) => {
        axios.put(`/api/product/${id}`, this.state)
        .then(res => {
            this.setState({
                editing: false
            })
            this.props.getInventory()
        })
    }

    render (){
        console.log(this.props)
        if (!this.state.editing){
            return(
                <div className="form-holder">
                
                    <img id="preview-img" src={this.state.img} alt="hello"/>
                    <label>Image URL:</label>
                    <input className="form" placeholder={this.state.img} onChange={e => this.handleImgChange(e)}></input>
                    <label>Product Name:</label>
                    <input className="form" placeholder={this.state.productName} onChange={e => this.handleNameChange(e)}></input>
                    <label>Price:</label>
                    <input className="form" placeholder={this.state.productPrice} onChange={e => this.handlePriceChange(e)}></input>
                    <button onClick={() => this.cancelButton()}>Cancel</button>
                    
                    <button id="addToInventory" onClick={() => this.addToInventory()}>Add to Inventory</button>
    
                </div>
            )
        } else { return(
            <div className="form-holder">
            
                <img id="preview-img" src={this.state.img} alt="hello"/>
                <label>Image URL:</label>
                <input className="form" placeholder={this.state.img} onChange={e => this.handleImgChange(e)}></input>
                <label>Product Name:</label>
                <input className="form" placeholder={this.state.productName} onChange={e => this.handleNameChange(e)}></input>
                <label>Price:</label>
                <input className="form" placeholder={this.state.productPrice} onChange={e => this.handlePriceChange(e)}></input>
                <button onClick={() => this.cancelButton()}>Cancel</button>
                
                <button id="addToInventory" onClick={() => this.saveChanges(this.state.currentId)}>Save Changes</button>

            </div>
                    )
            }
    }
}