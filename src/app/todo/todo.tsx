
import Button from "../../components/button";
import Search from "./search";
import TodoList from "./todo-list";

export default function Todo(){
    return (
        <div>
        <h1>Todo App</h1>
        <Search/>
        <TodoList/>
        <Button title="Add" />

        </div>
    )
}