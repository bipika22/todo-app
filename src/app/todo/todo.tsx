import Search from "./search";
import TodoList from "./todo-list";
import TodoForm from "./todo-form";
import { useState } from "react";


export default function Todo(){
    const [todoList, setTodoList] = useState([]);
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
const addTodo =(todo)=>{
  const newTodos = [...todoList,todo]
  setTodoList(newTodos)
}
    return (
        <div>
        <h1>Todo App</h1>
        <Search/>
        <TodoForm addTodo={addTodo}/>
        <TodoList 
                todoList={todoList}
                toggleCompleted={toggleCompleted}
                removeTodo={removeTodo}
        
        />

        {/* <Button title="Add Todo"/> */}

        </div>
    )
}