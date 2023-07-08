import ToDo from "../../components/ComponentesTarefas/ToDo";
import Formulario from "../../components/ComponentesTarefas/Formulario";
import { useState, useEffect } from "react";

export default function Tarefas() {
  const [listaTarefas, setListaTarefas] = useState(["Tarefa 01", "Tarefa 02"]);


  //Altera o título da página conforme a quantidade de tarefas existentes
  useEffect(() => {
    document.title = `${listaTarefas.length} tarefas cadastradas.`;
  });

  const novaTarefa = (Tarefa) => {
    setListaTarefas([...listaTarefas, Tarefa]);
    console.log(`Tarefa ${Tarefa} foi criada com sucesso`);
    console.log(listaTarefas);
  };

  const limparTarefas = () => {
    setListaTarefas([]);
  };

  return (
    <>
      <h1>Lista de tarefas do Érico: </h1>
      <Formulario adicionarTarefa={novaTarefa} />
      <h2>Tarefas</h2>
      <ToDo tarefas={listaTarefas} />
      <button onClick={limparTarefas}>Limpar tarefas</button>
    </>
  );
}
