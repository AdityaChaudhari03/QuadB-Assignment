import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/todoSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ul className="grid grid-cols-1 gap-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex items-center border border-gray-300 p-4 rounded-md"
        >
          <input
            type="checkbox"
            className="mr-2 form-checkbox h-5 w-5 text-green-500"
            checked={task.completed}
            onChange={() => handleToggleTask(task.id)}
          />
          <span
            className={`flex-grow ${
              task.completed ? "line-through text-green-500" : ""
            }`}
          >
            {task.text}
          </span>
          <button
            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => handleDeleteTask(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
