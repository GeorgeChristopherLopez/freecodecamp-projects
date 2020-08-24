function App() {
  const [sessionLength, setSessionLength] = React.useState(25);
  const [breakLength, setBreakLength] = React.useState(5);
  const [timeLeft, setTimeLeft] = React.useState(sessionLength * 60);
  const [onBreak, setOnBreak] = React.useState(false);
  const [running, setRunning] = React.useState(false);

  const format = time => {
    let min = Math.trunc(time / 60);
    let sec = time % 60;
    return time;
  };

  const reset = () => {
    setRunning(false);
    setSessionLength(25);
    setBreakLength(5);
    setOnBreak(false);
    setTimeLeft(25 * 60);

  };

  const labelHanlder = command => {
    console.log(command);
    if (command == "session-increment") {
      if (sessionLength < 60)
      setSessionLength(sessionLength + 1);
    }
    if (command == "session-decrement") {
      if (sessionLength > 1)
      setSessionLength(sessionLength - 1);
    }
    if (command == "break-increment") {
      if (breakLength < 60)
      setBreakLength(breakLength + 1);
    }
    if (command == "break-decrement") {
      if (breakLength > 1)
      setBreakLength(breakLength - 1);
    }

  };

  const start_stop = () => {
    setRunning(!running);
  };


  return (

    React.createElement("main", null,

    React.createElement("h1", null, "Pomodoro Clock"),
    React.createElement("div", { id: "break-session-container" },
    React.createElement("div", { id: "break-label" },
    React.createElement("a", { id: "break-increment", onClick: () => labelHanlder("break-increment") }, "+"),
    React.createElement("a", { id: "break-length" }, breakLength),
    React.createElement("a", { id: "break-decrement", onClick: () => labelHanlder("break-decrement") }, "-")),

    React.createElement("div", { id: "session-label" },
    React.createElement("a", { id: "session-increment", onClick: () => labelHanlder("session-increment") }, "+"),
    React.createElement("a", { id: "session-length" }, sessionLength),
    React.createElement("a", { id: "session-decrement", onClick: () => labelHanlder("session-decrement") }, "-"))),


    React.createElement("div", { id: "timer-container" },
    React.createElement("h5", { id: "timer-label" }, onBreak ? "Break" : "Session"),
    React.createElement("h1", { id: "time-left" }, timeLeft)),


    React.createElement("div", { id: "controler" },
    React.createElement("a", { id: "start_stop", onClick: start_stop }, "start_stop"),
    React.createElement("a", { id: "reset", onClick: reset }, "reset")),

    running ? console.log(running) : React.createElement("p", null, "not running")));


}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));