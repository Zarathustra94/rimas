import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const dataInicial = new Date(2024, 1, 25); // 25 de fevereiro de 2024
  const dataFinal = new Date(dataInicial); // copia da data inicial
  dataFinal.setDate(dataFinal.getDate() + 60); //add 60 dias a data final

  const [diasRestantes, setDiasRestantes] = useState(60);
  const [horasRestantes, setHorasRestantes] = useState(0);
  const [minutosRestantes, setMinutosRestantes] = useState(0);
  const [segundosRestantes, setSegundosRestantes] = useState(0);
  const [prazoExpirado, setPrazoExpirado] = useState(false);

  useEffect(function() {
      const intervalo = setInterval(function() {
          const agora = new Date(); // data de agora 
          let diferencaEmMilissegundos = dataFinal - agora;        
          //*100 pra 1 seg *60 pra 1 minuto * 60 pra uma hr * 24 pra um dia. A função date retorna em milissegundos 
          
          if (diferencaEmMilissegundos < 0) {
              setPrazoExpirado(true);
              clearInterval(intervalo);
              // Calcular a diferença de tempo após o prazo ter expirado
              diferencaEmMilissegundos = Math.abs(diferencaEmMilissegundos); // Garantindo que a diferença seja positiva
              const diasExpirados = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
              diferencaEmMilissegundos %= (1000 * 60 * 60 * 24);
              const horasExpiradas = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60));
              diferencaEmMilissegundos %= (1000 * 60 * 60);
              const minutosExpirados = Math.floor(diferencaEmMilissegundos / (1000 * 60));
              diferencaEmMilissegundos %= (1000 * 60);
              const segundosExpirados = Math.floor(diferencaEmMilissegundos / 1000);
              
              setDiasRestantes(diasExpirados);  // Atualiza o estado de dias
              setHorasRestantes(horasExpiradas);  // Atualiza o estado de horas
              setMinutosRestantes(minutosExpirados);  // Atualiza o estado de minutos 
              setSegundosRestantes(segundosExpirados);  // Atualiza o estado de segundos
              
              return;
          }
          
          const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
          diferencaEmMilissegundos = Math.abs(diferencaEmMilissegundos); // Garantindo que a diferença seja positiva
          const diferencaEmHoras = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const diferencaEmMinutos = Math.floor((diferencaEmMilissegundos % (1000 * 60 * 60)) / (1000 * 60));
          const diferencaEmSegundos = Math.floor((diferencaEmMilissegundos % (1000 * 60)) / 1000);
      
          setDiasRestantes(diferencaEmDias);  // Atualiza o estado de dias
          setHorasRestantes(diferencaEmHoras);  // Atualiza o estado de horas
          setMinutosRestantes(diferencaEmMinutos);  // Atualiza o estado de minutos 
          setSegundosRestantes(diferencaEmSegundos);  // Atualiza o estado de segundos
      }, 1000); // o 1000 indica que a atualização do estado será a cada 1 segundo (1000)
      
      return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, []); // aqui deve ser passado um array vazio para que o useEffect rode apenas uma vez
  
  return (
      <div>
          <h1>♥ Contagem Regressiva Para o Nosso Projetinho 60 dias! ♥</h1>
          {prazoExpirado ? (
          <h2>O prazo expirou há {Math.abs(diasRestantes)} dias, {Math.abs(horasRestantes)} horas, 
          {Math.abs(minutosRestantes)} minutos e {Math.abs(segundosRestantes)} segundos. </h2>
          ) : (
          <h2>
          {diasRestantes} dias, {horasRestantes} horas, {minutosRestantes} minutos e {segundosRestantes} segundos restantes
          </h2>
          )}
      </div>
  );  
}

export default App;