import './App.css';
import { useState } from 'react';

function App({titulo}) {
  const [state, setState]= useState('state'); //exemplo
  const [idade, setIdade] = useState(21);
  const [peso, setPeso] = useState(20);
  const [numeroExibido, setNumeroExibido] = useState(0);
  

  //JAVASCRIPT FUNCTIONS !! PESQUISAR
  
  //Forma 1
  const handleClick = () => {
    //action
    console.log("handleClick ativado");
    setNumeroExibido(numeroExibido + 1);
  }

  //Forma 2
  function handleClick2(){
    //action
    console.log("handleClick2 ativado");
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          {titulo}
        </p>
        {numeroExibido}
        <button onClick={handleClick} >Oi sou um botão</button>
      </header>
    </div>
  );
}

export default App;
