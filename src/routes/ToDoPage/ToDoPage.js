import React from 'react'
import { ToDoPageLayout } from "./style";
import ToDoList from "./ToDoList/ToDoList";
import AddToDo from './AddToDo/AddToDo';

export default function ToDoPage() {
  return (
    <ToDoPageLayout>
      <AddToDo/>
      <ToDoList/>
    </ToDoPageLayout>
  );
}