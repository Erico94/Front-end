import { useEffect, useRef, useState } from "react";
export default function Formulario({ adicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [completa, setCompleta] = useState(false);
  const inputRef = useRef(false);
  const [errorForm, setErrorForm] = useState(false);

  useEffect(() => {
        setErrorForm(false)
        inputRef.current.style.borderColor='gray';
    }, [novaTarefa])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(novaTarefa === ""){
      setErrorForm(true);
      inputRef.current.style.borderColor='red';
      return;
    }
    setCompleta(false);
    console.log("Tarefa:", novaTarefa, completa);
    adicionarTarefa(novaTarefa);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      {errorForm && <span>Preencha o formulário.</span>}
      <button type="submit">Criar tarefa</button>
    </form>
  );
}
