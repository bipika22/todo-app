// functional
// class based

// .tsx
// .jsx
// .js
// .ts      //Typescript= javascript with superpower
//for prevent
// debugging
// code refactor

// App is a component which should be capitalize

// import {title, description} from './main'

import TodoList from "./app/todo/todo-list";
import { Button } from "./components/ui/button";
import Search from "./app/todo/search";
import Counter from "./app/counter";
import ToggleLight from "./app/toggle-light";
function App() {
  const title = "Hello World";
  const description = "Welcome to the App";
  const buttonTitle = "Click Me";
  return (
    <div>
      <h1 className="text-red-900">{title}</h1>
      <p>{description}</p>
      <button>{buttonTitle}</button>

      <Search />
      <TodoList />
      <Button title="Click Me" />
      <Button title="Sign up" />
      <Button title="Log In" />
      <Button title="Click Me" />
      <Counter />
      <ToggleLight />
    </div>
  );
}
export default App;
