import TodoItem from "./todo-item";



export default function Todolist(props) {
const {todoList, toggleCompleted, removeTodo}  = props

  return (
    <ul>
      {todoList.map((item) => {
        const {id,title,description,completed} = item
        return (
          <TodoItem
            key={`todo-${id}`}
            text={title}
            description={description}
            completed={completed}
            id={id}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo} />
        ); 
      })}
    </ul>
  );
}
