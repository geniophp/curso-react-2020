import React from 'react';
import { render } from 'react-dom';

/*
function App() {
  return (
    <div>
      Hello World!
    </div>
  );
}
*/

class App extends React.Component {

  state = {
    nome : ""
  }

  /*constructor (){
    super()
    this.modificarNome = this.modificarNome.bind( this )
  }

  modificarNome(e){

    this.setState({
      nome : e.target.value
    })
  }*/

  criarComboBox = () => {
    const opcoes = ["Fulano","Ciclano"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option> )
    return (
        <select>
          {comboBoxOpcoes}
        </select>
    )
  }

  modificarNome = (e) => {
    //let nome = e.target.value;

    this.setState({
      nome : e.target.value
    })
  }

  //executa apos denderizar a página
  componentDidMount(){
    console.log("Executou o componentDidMount")
  }

  render(){
    console.log("Executou o render")
    const MeuComboBox = () => this.criarComboBox()
    return(
    <>
      <input className="centralizar-texto" type="text" value={this.state.nome} onChange={ this.modificarNome } />
      <h1>Hello {this.state.nome}</h1>
      <MeuComboBox />
    </>
    )
  }
}

export default App;
