import React, { Component } from 'react';
import '../App.css';

const frases = require("../phrases/phrases.json")

class Phrase extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    console.log(this.props.location.state.fraseEscolhida)
  }

  goBack(){
    this.props.history.push({ pathname: '/'});
  }

  render() {
    return (
      <div style={{display: "flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}> 
        <h1> {this.props.location.state.fraseEscolhida} </h1>
        <br />
        <a onClick={ ()=>this.goBack() }>
          <a class="btn" data-wipe="Nova frase...">Tentar novamente</a>
        </a>
      </div>
    );
  }
}

export default Phrase;
