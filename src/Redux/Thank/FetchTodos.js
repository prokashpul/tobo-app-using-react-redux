import { loaded } from "../Todo/Action";

const FetchTodos = async (dispatch) => {
  const res = await fetch("http://localhost:9000/todos");
  const todos = await res.json();
  dispatch(loaded(todos));
};

export default FetchTodos;
