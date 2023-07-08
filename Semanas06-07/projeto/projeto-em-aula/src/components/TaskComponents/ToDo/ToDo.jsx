
export default function ToDo({tarefas}){
    const handleClick = (i)=>{
        tarefas.map(item=>{
            if (item.key == i.key){
                const newArray = tarefas.filter(e=> e !==i);
                tarefas = newArray;
            }
        })
    }
    return (
        <div>
            <ul>
                {
                    tarefas.map(item=> {
                        return <li key={item}>{item} <button onClick={handleClick}>Concluir tarefa</button></li>
                    })
                }
            </ul>
        </div>
    )
}