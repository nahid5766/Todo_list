import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <span
          className={`w-7 h-7 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${
            isComplete
              ? "bg-orange-500 border-orange-500"
              : "border-slate-300 bg-white"
          }`}
        >
          {isComplete && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </span>

        <p
          className={`ml-3 text-[17px] ${
            isComplete ? "line-through text-slate-400" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        className="w-3.5 cursor-pointer"
        alt="delete"
      />
    </div>
  );
};

export default TodoItems;
