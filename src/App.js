import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">To-Do Application</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
