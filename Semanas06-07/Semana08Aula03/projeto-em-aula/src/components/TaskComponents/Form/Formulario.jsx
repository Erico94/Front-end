


// import React, { useState, useEffect, useRef } from 'react';

// const Formulario = () => {
//   const [taskName, setTaskName] = useState('');
//   const [isCompleted, setIsCompleted] = useState(false);
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // document.title = `Total de tarefas cadastradas: ${addTask.length}`;
//     return () => {
//       document.title = 'Lista de Tarefas';
//     };
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(taskName);
//     // addTask({ name: taskName, isCompleted });
//     setTaskName('');
//     setIsCompleted(false);
//     console.log(taskName);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={taskName}
//         onChange={(e) => setTaskName(e.target.value)}
//         ref={inputRef}
//       />
//       <label>
//         Concluída:
//         <input
//           type="checkbox"
//           checked={isCompleted}
//           onChange={() => setIsCompleted(!isCompleted)}
//         />
//       </label>
//       <button type="submit">Adicionar</button>
//     </form>
//   );
// };

// export default Formulario;


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
