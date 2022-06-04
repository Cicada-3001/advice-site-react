import logo from './logo.svg'
import React from 'react'
import axios from 'axios'
import './App.css';

class App  extends React.Component {
  state= {
      advice: ''
  }

  componentDidMount(){
     this.fetchAdvice();
  }


  fetchAdvice=()=>{
    axios.get("	https://api.adviceslip.com/advice").then((response )=>{
    const {advice}=  response.data.slip
    this.setState({advice})
  }).catch((error )=>{

    })
  }
  //axios.get(``).

  render(){
    const {advice}= this.state
    return (
      <div className='outer-outer'>
        <div className='outer-inner'> 
          <div className='quote'>{advice}</div>
          <div><button onClick={this.fetchAdvice}>Give me advice</button></div>
        </div>
      </div>
      
    );
  } 

}

export default App;
