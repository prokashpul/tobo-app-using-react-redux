import { toggle } from "../Todo/Action";

const updateTodo = (todoID, currentStatus) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoID}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const todo = await res.json();
    dispatch(toggle(todo.id));
  };
};

export default updateTodo;
