import { useState } from "react";
import TodoItem from "./todo-item";


const DEFAULT_TODO_LIST = [
  {
    id: 1,
    title: "Go to Office",
    description: "Please reach before 9",
    completed: false,
  },
  {
    id: 2,
    title: "Drink Water",
    description: "Every 4hr",
    completed: true,
  },
  {
    id: 3,
    title: "Test Water",
    description: "Every 4hr",
    completed: false,
  },
];
export default function Todolist() {
  const [todoList, setTodoList] = useState(DEFAULT_TODO_LIST);
  const toggleCompleted = (id) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo
    })
    setTodoList(newTodos)
  }
  const removeTodo =(id)=>{
const newTodos =todoList.filter(item=>item.id!==id)

setTodoList(newTodos)
  }

  return (
    <ul>
      {todoList.map((item) => {
        return (
          <TodoItem
            key={`todo-${item.id}`}
            text={item.title}
            description={item.description}
            completed={item.completed}
            id={item.id}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        ); 
      })}
    </ul>
  );
}
