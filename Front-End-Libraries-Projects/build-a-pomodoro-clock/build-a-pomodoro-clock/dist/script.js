function App() {
  const [timeLeft, setTimeLeft] = React.useState(25);
  function format(time) {
    return time - 1 + ":00";
  }
  return (
    React.createElement("main", null,
    React.createElement("h1", null, "Pomodoro Clock"),
    React.createElement("div", { id: "break-session-container" },
    React.createElement("div", { id: "break-label" },
    React.createElement("a", { id: "break-increment" }, "+"),
    React.createElement("a", { id: "break-length" }, "5"),
    React.createElement("a", { id: "break-decrement" }, "-")),

    React.createElement("div", { id: "session-label" },
    React.createElement("a", { id: "session-increment" }, "+"),
    React.createElement("a", { id: "session-length" }, "25"),
    React.createElement("a", { id: "session-decrement" }, "-"))),


    React.createElement("div", { id: "timer-container" },
    React.createElement("h5", { id: "timer-label" }, "Session"),
    React.createElement("h1", { id: "time-left" }, format(timeLeft))),


    React.createElement("div", { id: "controler" },
    React.createElement("a", { id: "start_stop" }, "start"),
    React.createElement("a", { id: "stop" }, "stop"),
    React.createElement("a", { id: "reset" }, "reset"))));



}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));