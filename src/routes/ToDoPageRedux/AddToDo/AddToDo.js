import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TO_DO } from "../../../redux/actions/toDoActions";

export default function AddToDo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          dispatch({ type: ADD_TO_DO, payload: { value: value } });
          setValue("");
        }}
      >
        新增
      </button>
    </div>
  );
}
