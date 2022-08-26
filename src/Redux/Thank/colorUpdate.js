import { colorSelected } from "../Todo/Action";

const colorUpdate = (todoID, color) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoID}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const todo = await res.json();
    dispatch(colorSelected(todo.id));
  };
};

export default colorUpdate;
