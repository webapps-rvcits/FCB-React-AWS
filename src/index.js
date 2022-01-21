import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

function Task(props) {
  return (
    <ul>
      <li className="tasks-item">{props.taskName}</li>
    </ul>
  );
}

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

// My first component
function App() {
	const paraStyle = {
		"marginButtom" : "15px"
	};

  return (
    <div className="app">
      <header className="app-header">
        <h1>My Amazing ToDo-List App</h1>
        <p style={paraStyle} >The most simple and amazing todo-list React app.</p>
        <TasksList />    
      </header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));