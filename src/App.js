import React from "react";

import Router from "./routes/Router";
import ToDoContext from "./context/ToDoContext";

import useToDo from "./utils/useToDo";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const { toDo, addToDo, updateToDo, deleteToDo } = useToDo();

  return (
    <Provider store={store}>
      <ToDoContext.Provider
        value={{
          data: toDo,
          addToDo: addToDo,
          updateToDo: updateToDo,
          deleteToDo: deleteToDo,
        }}
      >
        <Router />
      </ToDoContext.Provider>
    </Provider>
  );
}

export default App;
