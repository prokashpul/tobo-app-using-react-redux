import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FetchTodos from "../../Redux/Thank/FetchTodos";

import Todo from "../Todo/Todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchTodos);
  }, [dispatch]);

  return (
    <>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        {todos
          .filter((todo) => {
            switch (filter.status) {
              case "Complete":
                return todo.completed;

              case "Incomplete":
                return !todo.completed;

              default:
                return true;
            }
          })
          .filter((todo) => {
            if (filter.colors.length > 0) {
              return filter.colors.includes(todo?.color);
            }
            return true;
          })
          .map((todo) => (
            <Todo todo={todo} key={todo.key}></Todo>
          ))}
      </div>
    </>
  );
}
