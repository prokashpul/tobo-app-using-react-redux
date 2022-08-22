import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusChange, addedColor } from "../../Redux/Filter/Action";

const reamingTask = (inCompletedTask) => {
  switch (inCompletedTask) {
    case 0:
      return "No Task";
    case 1:
      return "1 Task";

    default:
      return `${inCompletedTask} Tasks`;
  }
};
export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const taskLeft = todos.filter((todo) => !todo.completed).length;

  const handleStatusChange = (status) => {
    dispatch(statusChange(status));
  };
  const handleAddedColor = (color) => {
    if (filter.colors.includes(color)) {
      dispatch(addedColor(color, "removed"));
    } else {
      dispatch(addedColor(color, "added"));
    }
  };
  return (
    <>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{reamingTask(taskLeft)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            onClick={() => handleStatusChange("All")}
            className={`cursor-pointer   ${
              filter.status === "All" && "font-bold"
            }`}
          >
            All
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("Incomplete")}
            className={`cursor-pointer   ${
              filter.status === "Incomplete" && "font-bold"
            }`}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("Complete")}
            className={`cursor-pointer   ${
              filter.status === "Complete" && "font-bold"
            }`}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li
            onClick={() => handleAddedColor("green")}
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer  ${
              filter.colors.includes("green") && "bg-green-500"
            }`}
          ></li>
          <li
            onClick={() => handleAddedColor("red")}
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              filter.colors.includes("red") && "bg-red-500"
            }`}
          ></li>
          <li
            onClick={() => handleAddedColor("yellow")}
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              filter.colors.includes("yellow") && "bg-yellow-500"
            }`}
          ></li>
        </ul>
      </div>
    </>
  );
}
