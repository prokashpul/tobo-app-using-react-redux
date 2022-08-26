import { deleted } from "../Todo/Action";

const deleteTodo = (todoID) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoID}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoID));
  };
};

export default deleteTodo;
