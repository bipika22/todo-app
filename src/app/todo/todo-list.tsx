import TodoItem from "./todo-item";
import { ITodoItem } from "./todo";

interface TodoListProps {
  todoList: ITodoItem[];
  removeTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
}

export default function TodoList(props: TodoListProps) {
  const { todoList, toggleCompleted, removeTodo } = props;
  if (todoList.length <= 0) {
    return <h1>No Todo Item found</h1>;
  }
  return (
    <ul>
      {todoList.map((item) => {
        const { id, title, description, completed } = item;
        return (
          <TodoItem
            key={`todo-${id}`}
            title={title}
            description={description}
            completed={completed}
            id={id}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        );
      })}
    </ul>
  );
}
