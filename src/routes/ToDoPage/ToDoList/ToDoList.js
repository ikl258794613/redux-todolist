import React, { useContext } from "react";
import List from "../../../components/List/List";
import ListItems from "../../../components/ListItem/ListItem";
import ToDoContext from "../../../context/ToDoContext";

export default function ToDoList() {
  const { data ,updateToDo,deleteToDo} = useContext(ToDoContext);

  return (
    <List>
      {data.map((item, index) => {
        //item結構為id,value
        return (
          <ListItems
            onChange={(e) => {
              updateToDo(index, e.target.value);
            }}
            onDelete={(e) => {
              deleteToDo(index);
            }}
            key={item.id}
            value={item.value}
          ></ListItems>
        );
      })}
    </List>
  );
}
