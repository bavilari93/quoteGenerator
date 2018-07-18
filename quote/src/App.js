import React, { Component } from 'react';
import './App.css';

class App extends Component {
   constructor(){
    super();
    this.state = {
      data:[], 
      quote:''
    }
  }

    getQuote() {
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1', {
            method: 'GET'
        }).then(response =>
            response.json()
        ).then((info) => {
          this.setState({
            data: info[0]
          })
        })
    }

    render() {
        return ( <
            div className = "App" >
            <
            button type = 'submit'
            onClick = { this.getQuote} > Quote < /button> <
            /div>
        );
    }
}

export default App;