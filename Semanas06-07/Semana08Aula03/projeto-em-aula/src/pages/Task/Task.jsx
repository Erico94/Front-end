import ToDo from "../../components/TaskComponents/ToDo/ToDo";
import Formulario from "../../components/TaskComponents/Form/Formulario";
import { useState, useEffect } from "react";

export default function Task() {
  const [listaTarefas, setListaTarefas] = useState(["Tarefa 01", "Tarefa 02"]);

  useEffect (()=>{
      document.title=`${listaTarefas.length} tarefas cadastradas.`
  })

  const novaTarefa = (Tarefa) => {
    setListaTarefas([...listaTarefas, Tarefa]);
    console.log(`Tarefa ${Tarefa} foi criada com sucesso`);
    console.log(listaTarefas);
  };

  const limparTarefas=()=>{
    setListaTarefas ([]);
  }

  return (
    <>
      <Formulario adicionarTarefa={novaTarefa} />
      <h2>Tarefas</h2>
      <ToDo tarefas={listaTarefas} />
      <button onClick={limparTarefas}>Limpar tarefas</button>
    </>
  );
}
