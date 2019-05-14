import React, { Component } from 'react';
import Dynamictime from './components/dynamictime/dynamictime.js'
class App extends Component {
  constructor(props){
  super (props)
  this.state=({time:''})
  
}

newtime=(e)=>{
  if (e.target.value<86400000){this.setState({time:e.target.value})}
  if (isNaN(e.target.value)) alert  ('Not a number')
}
 
  render() { 
    return ( 
      <div>
        <input className='text' type='text' value={this.state.value} onChange={this.newtime}></input>
        <Dynamictime time={this.state.time}/>
      </div>
    );
  }
}
 
export default App;