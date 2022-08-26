import React from "react";
import cancel from "../../assets/images/cancel.png";
import { deleted } from "../../Redux/Todo/Action";
import { useDispatch } from "react-redux";
import updateTodo from "../../Redux/Thank/updateTodo";
import colorUpdate from "../../Redux/Thank/colorUpdate";
import deleteTodo from "../../Redux/Thank/deletTodo";

export default function Todo({ todo }) {
  const dispatch = useDispatch();
  const { text, id, completed, color } = todo || {};
  const handelChange = (todoID) => {
    dispatch(updateTodo(todoID, completed));
  };
  const handleColorChange = (todoID, color) => {
    dispatch(colorUpdate(todoID, color));
  };
  const handleDelete = (todoID) => {
    dispatch(deleteTodo(todoID));
  };

  return (
    <>
      <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
        <div
          className={`relative rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
            completed && " focus-within:border-green-500 border-green-500"
          }`}
        >
          <input
            onChange={() => handelChange(id)}
            checked={completed}
            type="checkbox"
            className="opacity-0 absolute rounded-full cursor-pointer"
          />
          {completed && (
            <svg
              className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>

        <div
          className={`select-none flex-1  ${
            completed && "line-through text-green-500"
          }`}
        >
          {text}
        </div>

        <div
          onClick={() => handleColorChange(id, "green")}
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500  ${
            color === "green" && "bg-green-500"
          }`}
        ></div>

        <div
          onClick={() => handleColorChange(id, "yellow")}
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500  ${
            color === "yellow" && "bg-yellow-500 "
          }`}
        ></div>

        <div
          onClick={() => handleColorChange(id, "red")}
          className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
            color === "red" && "bg-red-500 "
          }`}
        ></div>

        <img
          onClick={() => handleDelete(id)}
          src={cancel}
          className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
          alt="Cancel"
        />
      </div>
    </>
  );
}
