import { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [ListaTarefas, setListaTarefas] = useState<ITarefa[]>([])
  const [tarefaSelecionada, setTarefaSelecionada] = useState<ITarefa>();
  const [countDown, setCountDown] = useState<NodeJS.Timeout | null>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    if(!!countDown) {
      clearTimeout(countDown);
      setCountDown(null);
    }
    setTarefaSelecionada(tarefaSelecionada);
    setListaTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => 
      (
        {
          ...tarefa,
          selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        }
      )
    ));
  }

  function finalizarTarefa() {
    if(tarefaSelecionada) { //checa se tarefaSelecionada existe (se não é undefined)
      setTarefaSelecionada(undefined);

      setListaTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === tarefaSelecionada.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))

      //Usando o Map similar ao jeito que foi usado na função selecionaTarefa
      // setListaTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => 
      //   (
      //     {
      //       ...tarefa,
      //       selecionado: tarefa.id === tarefaSelecionada.id ? false : true,
      //       completado: tarefa.id === tarefaSelecionada.id ? true : false
      //     }
      //   )
      // ))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setListaTarefas}/>
      <Lista 
        tarefas={ListaTarefas} 
        selecionaTarefa={selecionaTarefa}  
      />
      <Cronometro 
        selecionado={tarefaSelecionada}
        finalizarTarefa={finalizarTarefa}
        setCountDown={setCountDown}
      />
    </div>
  );
}

export default App;
