import React, { useState } from "react";
import notes from "../../assets/images/notes.png";
import plusImg from "../../assets/images/plus.png";
import dabbleTik from "../../assets/images/double-tick.png";
import { useDispatch } from "react-redux";
import { added, allCompleted, clear } from "../../Redux/Todo/Action";
export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const inputHandel = (e) => {
    e.preventDefault();
    setInput(e.target.text.value);
    dispatch(added(input));
  };
  const allCompleteHandel = () => {
    dispatch(allCompleted());
  };
  const clearHandel = () => {
    dispatch(clear());
  };
  return (
    <header>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={inputHandel}
      >
        <img src={notes} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          name="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          style={{ backgroundImage: `url(${plusImg})` }}
          type="submit"
          className={`appearance-none w-8 h-8  bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={dabbleTik} alt="Complete" />
          <span onClick={allCompleteHandel}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandel}>
          Clear completed
        </li>
      </ul>
    </header>
  );
}
