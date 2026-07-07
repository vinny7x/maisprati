import { useState } from "react";


function Saudacao({ nome }) {
  return <h2>Olá, {nome}, seja bem vindo(a)!</h2>;
}

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Apender sobre props", completed: true },
    { id: 2, text: "Entender useState", completed: false },
    { id: 3, text: "Estudar WebComponents", completed: false }
  ]);
  const [input, setInput] = useState("");

  function handleRemove(id) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }
  function handleAdd() {
    if (!input) {
      alert("Não é possível adicionar uma tarefa sem conteúdo!");
      return;
    }
    setTasks(prev => [...prev,
    {
      id: (prev.at(-1)?.id ?? 0) + 1,
      text: input,
      completed: false
    }
    ]);
    setInput("");
  }
  return (
    <>
      <Saudacao nome='Vinny' />
      <div>
        {tasks.length < 1 ? (<p>Sem tarefas</p>) : ''}
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>{task.id} {task.text} {task.completed} | {task.completed ? "✅ Concluída" : "❌ Pendente"} <button onClick={() => handleRemove(task.id)}>
                Remover
              </button></li>
            );
          })}
        </ul>
        <input id="addTask" type="text" placeholder="Insira uma tarefa" onChange={(e) => { setInput(e.target.value); }} value={input} />
        <button onClick={() => handleAdd()}>Adicionar tarefa</button>
      </div>
    </>
  );
}

