// Componente 10 & 11 - Todo List e Filtro
import { useState } from "react";
export default function ToDo() {
  const [tasks, setTask] = useState([]);
  const [filterIn, setFilterIn] = useState("");

  const handleList = () => {
    let task = document.querySelector("#task");
    setTask([...tasks, task.value]);
    task.value = "";
  };

  return (
    <>
      <input type="text" placeholder="Task" id="task" />
      <button onClick={handleList}>Add</button>
      <input
        type="text"
        placeholder="Filter the list above"
        onChange={(e) => setFilterIn(e.target.value)}
      />

      <ul>
        {filterIn === ""
          ? tasks.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          : tasks
              .filter((item) => item.includes(filterIn))
              .map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
      </ul>
    </>
  );
}
