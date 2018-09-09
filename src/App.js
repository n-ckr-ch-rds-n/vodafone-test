import React, { Component } from 'react';
import './App.css';
import PhoneData from './phonedata';
import Gold from './images/Apple_iPhone_8_Gold-full-product-front.png';
import Silver from './images/Apple_iPhone_8_Silver_WS2-full-product-front.png';
import Grey from './images/Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page/>
      </div>
    );
  }
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupname: PhoneData[0].groupName,
      phonetype: PhoneData[0].deviceSummary[0],
      colour: Gold
    }
  }

  render() {
    function handleClick(e) {
      e.preventDefault();
      console.log(e.target.value);
    }

    return (
      <div className="Page">
        <img src={this.state.colour} alt=""></img>
        <p>{this.state.groupname}</p>
        <p>{this.state.phonetype.displayDescription}</p>
        <p>Colour: {this.state.phonetype.colourName}</p>
        <button value='gold' onClick={handleClick}>Gold</button>
        <button value='silver' onClick={handleClick}>Silver</button>
        <button value='grey' onClick={handleClick}>Grey</button>
        <p>Capacity: {this.state.phonetype.memory}</p>
        <p>from £{this.state.phonetype.priceInfo.hardwarePrice.oneOffPrice.gross} upfront cost</p>
        <p>When you pay £{this.state.phonetype.priceInfo.bundlePrice.monthlyPrice.gross} a month</p>
      </div>
    )
  }
}

export default App;
