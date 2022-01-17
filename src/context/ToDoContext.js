import { createContext } from "react";
export const initToDo = {
  data: [{ value: "資料一", id: Date.now() }],
  updataToDo: () => {},
  addToDo: () => {},
  deleteToDo: () => {},
};

export default createContext(initToDo);
