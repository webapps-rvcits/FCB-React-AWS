import Task from "./Task"

function TasksList() {
  const taskItemsList = [
    "Follow Edukasyon.ph on Facebook.",
    "Follow AWS Siklab Pilipinas on Facebook.",
    "Follow Zuitt Coding Bootcamp on Facebook.",
    "Follow Zuitt Coding Bootcamp on Instagram.",
    "Follow Edukasyon.ph on Instagram"
  ];

  return (
    <div>
      <input className="task-input" />
      <ul>
        {taskItemsList.map((task, index) => {
          return <Task key={index} taskName={task} />
        })}
      </ul>
    </div>
  );
}

export default TasksList;