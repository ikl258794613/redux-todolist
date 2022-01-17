import React from "react";
import List from "../../../components/List/List";
import ListItems from "../../../components/ListItem/ListItem";

import { useSelector, useDispatch } from "react-redux";
import { UPDATE_TO_DO, DELETE_TO_DO } from "../../../redux/actions/toDoActions";

export default function ToDoList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  return (
    <List>
      {data.map((item, index) => {
        //item結構為id,value
        return (
          <ListItems
            onChange={(e) => {
              dispatch({
                type: UPDATE_TO_DO,
                payload: {
                  index: index,
                  value: e.target.value,
                },
              });
            }}
            onDelete={(e) => {
              dispatch({
                type: DELETE_TO_DO,
                payload: {
                  index: index,
                },
              });
            }}
            key={item.id}
            value={item.value}
          ></ListItems>
        );
      })}
    </List>
  );
}
