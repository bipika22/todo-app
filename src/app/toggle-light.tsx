import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ToggleLight() {
  const [isTurnedOn, setTurnedOn] = useState(false);
  const handleToggle = () => {
    setTurnedOn(!isTurnedOn);
  };
  return (
    <div>
      <Button title="Toggle" onClick={handleToggle} />
      <div
        className={`w-[40px] h-[10px] rounded-full ${
          isTurnedOn ? "bg-green-500" : "bg-red-400"
        }`}>
        {" "}
      </div>
    </div>
  );
}
