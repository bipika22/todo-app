import Search from "./search";
import TodoList from "./todo-list";
import TodoForm from "./todo-form";
import { useEffect, useState } from "react";

export interface ITodoItem {
  title: string;
  description: string;
  completed: boolean;
  id: string;
}
const getTodoList = () => {
  const todoList = localStorage.getItem("todoList");
  if (todoList) {
    return JSON.parse(todoList);
  }
  return [];
};

export default function Todo() {
  const [todoList, setTodoList] = useState<ITodoItem[]>(getTodoList());
  const [search, setSearch] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const toggleCompleted = (id: string) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodoList(newTodos);
  };
  const removeTodo = (id: string) => {
    const newTodo = todoList.filter((item) => item.id !== id);

    setTodoList(newTodo);
  };
  const addTodo = (todo: ITodoItem) => {
    const newTodo = [...todoList, todo];
    setTodoList(newTodo);
  };

  const filteredList = todoList.filter((item) =>
    item?.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <Search search={search} handleChange={handleChange} />
      <TodoList
        todoList={filteredList}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />

      {/* <Button title="Add Todo"/> */}
    </div>
  );
}
