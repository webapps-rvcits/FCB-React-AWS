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
  return (
    <ul>
      <Task taskName="Follow Edukasyon.ph on Facebook."/>

      <Task taskName="Follow AWS Siklab Pilipinas on Facebook."/>

      <Task taskName="Follow Zuitt Coding Bootcamp on Facebook."/>
    </ul>
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