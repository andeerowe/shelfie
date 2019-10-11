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
      inventoryList:[]
    }
  }
  componentDidMount(){
    axios.get('/api/inventory')
    .then(res => {
    
      this.setState({
        inventoryList: res.data
      })
      console.log(this.state.inventoryList)
  })
    .catch(err => console.log('Try Again :(', err))
  }

  render(){
    console.log(this.state.inventoryList)
    return (
      <div className="App">
        <Dashboard inventoryList={this.state.inventoryList}/>
        <Form />
        <Header/>
      </div>
    )
  }
}

export default App;
