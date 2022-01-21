import { useState } from "react"

import Task from "./Task"

function TasksList() {

  const [taskItemsList, setTaskItemsList] = useState([
    "Follow Edukasyon.ph on Facebook.",
    "Follow AWS Siklab Pilipinas on Facebook.",
    "Follow Zuitt Coding Bootcamp on Facebook.",
    "Follow Zuitt Coding Bootcamp on Instagram.",
    "Follow Edukasyon.ph on Instagram"
  ]);

  const [taskValues, setTaskValue] = useState("");

  console.log(taskValues);

  const inputChangeHandler= (e) => {
  	setTaskValue(e.target.value)
  };

  const addTaskHandler = () => {
  	setTaskItemsList([taskValues, ...taskItemsList]);
  	setTaskValue("");
  }

  return (
    <div>
      <input
      	className="task-input"
      	placeholder="Create a new task" 
      	onChange={inputChangeHandler}
      	onBlur={addTaskHandler}
      	value={taskValues}
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