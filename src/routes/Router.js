import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoPage from "./ToDoPage/ToDoPage";
import ToDoPageRedux from "./ToDoPageRedux/ToDoPageRedux"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ToDoPage />}></Route>
        <Route  path="/redux" element={<ToDoPageRedux />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
