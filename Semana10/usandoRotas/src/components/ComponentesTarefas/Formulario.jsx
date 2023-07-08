import { useState } from "react";
export default function Formulario({adicionarTarefa}) {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [completa, setCompleta] = useState(false);

  
  const handleSubmit = ((event)=>{
    event.preventDefault();
    setCompleta(false)
    console.log('Tarefa:',novaTarefa, completa);
    adicionarTarefa(novaTarefa);

  })


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e)=>setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button type="submit">Criar tarefa</button>
    </form>
  );
}
