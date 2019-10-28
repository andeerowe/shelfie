import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import axios from 'axios';


class App extends Component{
  constructor(){
    super()

    this.state= {
      inventoryList:[],
      currentProductId: 0
    }
  }
  componentDidMount(){
    this.getInventory()
  }

  getInventory = () => {
    axios.get('/api/inventory')
    .then(res => {
    
      this.setState({
        inventoryList: res.data
      })
      console.log(this.state.inventoryList)
  })
    .catch(err => console.log('Try Again :(', err))
  }

  selectForEditing = (product) => {
    this.setState({
      currentProductId: product
    })
  }

  render(){
    // console.log(this.state.inventoryList)
    return (
      <div>
        <Header />
        <div className="App">
      
      <Dashboard 
        getInventory={this.getInventory} 
        inventoryList={this.state.inventoryList}
        selectForEditing={this.selectForEditing}
        />
      <Form current={this.state.currentProductId} getInventory={this.getInventory}/>
      
    </div>
    </div>
    )
  }
}

export default App;
