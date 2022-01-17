import { useState, useContext} from "react";

import toDoContext from "../../../context/ToDoContext";

export default function AddToDo() {
  const [value, setValue] = useState("");
  
  const { addToDo } = useContext(toDoContext);
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          addToDo(value);
          setValue("");
        }}
      >
        新增
      </button>
    </div>
  );
}
