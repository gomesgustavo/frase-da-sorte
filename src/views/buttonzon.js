import React, { Component } from 'react';
import '../App.css';

const frasesMock = require("../phrases/phrases.json")

class Buttonzon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fraseAleatoria:[],
      fraseEscolhida: '',
      numEscolhido: 0
    };
  }

  componentDidMount(){
    var frases = Array();
    frases[0] = "O que você pensa sobre mim não vai mudar quem eu sou, mas pode mudar o meu conceito sobre você."
    frases[1] = "A melhor liberdade é quando você se livra do que te faz mal."
    frases[2] = "É melhor dar valor porque a saudade não traz ninguém de volta."
    frases[3] = "Humildade não te faz melhor que ninguém, mas te faz diferente de muitos."
    frases[4] = "Objetivo do dia: Ser uma pessoa melhor, não perfeito, apenas melhor que ontem!"
    frases[5] = "Todo Amor é eterno. Se não é eterno, não era Amor."
    frases[6] = "Que a felicidade vire rotina."
    frases[7] = "As pessoas querem te ver bem, mas nunca, melhor que elas."
    frases[8] = "Lembre-se que a felicidade é um modo de viver e não um objetivo de vida."
    frases[9] = "Eu não sou a melhor pessoa do mundo, mas pelo menos não finjo ser quem não sou."
    frases[10] = "Onde há fé, há amor, onde há amor, há paz, onde há Deus, nada falta."
    frases[11] =  "Você não pode se preocupar com o que pensam sobre você. Você é melhor que todos eles."
    frases[12] = "O que machuca não é o amor, são as pessoas. O amor é só um sentimento." 

    var numAleatorio = Math.random();
    numAleatorio = Math.floor(numAleatorio * 12)
    this.setState({numEscolhido: numAleatorio})
    var fraseEscolhida = frases[numAleatorio]
    this.setState({fraseEscolhida: fraseEscolhida})
  }

  goPhase(){
    this.props.history.push({
      pathname: '/phrase',
      state: { fraseEscolhida: this.state.fraseEscolhida }
    })
  }

  render() {
    return (
        <React.Fragment>
          <div style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
            <a onClick={ ()=>this.goPhase() }>
              <a class="btn" data-wipe="Frase de sorte...">Minha frase do dia</a>
            </a>
          </div>
        </React.Fragment>
    );
  }
}

export default Buttonzon;
