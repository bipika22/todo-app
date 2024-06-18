import Button from "../../components/button";
import { useState } from "react";
import uuid4 from "uuid4";

function TodoForm(props) {
  const { addTodo } = props;
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  const { title, description } = todo;
  const handleChange = (e) => {
    const name = e.target.name;
    console.log(e, "event");
    setTodo({ ...todo, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, completed: false, id: uuid4() };
    addTodo(newTodo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          className="border"
          onChange={handleChange}
          name="title"
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          name="description"
          className="border"
          onChange={handleChange}
        />
      </div>
      <Button title="Add" />
    </form>
  );
}
export default TodoForm;
