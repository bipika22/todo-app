import { Button } from "../../components/ui/button";

interface TodoItemProps {
  completed: boolean;
  id: string;
  title: string;
  description: string;
  removeTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
}

function TodoItem(props: TodoItemProps) {
  const { completed, toggleCompleted, removeTodo, title, description, id } =
    props;
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        value={completed ? "true" : "false"}
        onChange={() => toggleCompleted(id)}
      />
      <h6> {title}</h6>
      <p>{description}</p>
      <Button onClick={() => removeTodo(id)}>Delete</Button>
    </li>
  );
}
export default TodoItem;
