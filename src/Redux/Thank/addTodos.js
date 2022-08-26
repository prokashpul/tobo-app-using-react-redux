import { added } from "../Todo/Action";

const addTodos = (todoText) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const todo = await res.json();
    dispatch(added(todo));
  };
};

export default addTodos;
