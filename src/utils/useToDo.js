import { useState } from "react";

export default function useToDo() {
  const [toDo, setToDo] = useState([{ value: '資料一', id: Date.now() }]);

  const addToDo = (value) => {
    const toDoCopy = [...toDo];
    toDoCopy.push({ value: value, id: Date.now() });
    setToDo(toDoCopy);
  };

  const updateToDo = (index, value) => {
    const toDoCopy = [...toDo];
    toDoCopy[index].value = value;
    setToDo(toDoCopy);
  };

  const deleteToDo = (index) => {
    const toDoCopy = [...toDo];
    toDoCopy.splice(index, 1);
    setToDo(toDoCopy);
  };

  return { toDo, addToDo, updateToDo, deleteToDo };
}
