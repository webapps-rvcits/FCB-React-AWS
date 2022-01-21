import { useState } from "react"

import Task from "./Task"

function TasksList() {
  const taskItemsList = [
    "Follow Edukasyon.ph on Facebook.",
    "Follow AWS Siklab Pilipinas on Facebook.",
    "Follow Zuitt Coding Bootcamp on Facebook.",
    "Follow Zuitt Coding Bootcamp on Instagram.",
    "Follow Edukasyon.ph on Instagram"
  ];

  const [taskValues, setTaskValue] = useState("Just another task");

  console.log(taskValues);

  const inputChangeHandler= (e) => {
  	setTaskValue(e.target.value)
  };

  return (
    <div>
      <input
      	className="task-input"
      	placeholder="Create a new task" 
      	onChange={inputChangeHandler}
      />

      <ul>
        {taskItemsList.map((task, index) => {
          return <Task key={index} taskName={task} />
        })}
      </ul>
    </div>
  );
}

export default TasksList;