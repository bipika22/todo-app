import { Button } from "@/components/ui/button";
import { useState } from "react";

//state
//mutatable

export default function Counter() {
  // let count =0

  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={handleSubtract}>Subtract</Button>
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
}
