function App() {
  const [sessionLength, setSessionLength] = React.useState(25);
  const [breakLength, setBreakLength] = React.useState(5);
  const [timeLeft, setTimeLeft] = React.useState(sessionLength * 60);
  const [onBreak, setOnBreak] = React.useState(false);
  const [running, setRunning] = React.useState(false);


  const format = time => {
    let min = Math.trunc(time / 60);
    let sec = time % 60;
    if (sec < 10) {
      sec = "0" + sec;
    }
    if (min < 10) {
      min = "0" + min;
    }
    return min + ":" + sec;
  };


  const labelHanlder = command => {

    if (command == "session-increment") {
      if (sessionLength < 60) {
        setSessionLength(sessionLength + 1);
        setTimeLeft((sessionLength + 1) * 60);
      }
    }
    if (command == "session-decrement") {
      if (sessionLength > 1) {
        setSessionLength(sessionLength - 1);
        setTimeLeft((sessionLength - 1) * 60);
      }
    }
    if (command == "break-increment") {
      if (breakLength < 60)
      setBreakLength(breakLength + 1);
    }
    if (command == "break-decrement") {
      if (breakLength > 1)
      setBreakLength(breakLength - 1);
    }
    if (onBreak) {
      setTimeLeft(sessionLength);
    }
  };

  const start_stop = () => {
    setRunning(!running);
  };
  const playAudio = e => {
    document.getElementById(e).play();

  };
  const resetAudio = e => {
    document.getElementById(e).pause();
    document.getElementById(e).currentTime = 0;
  };

  const reset = () => {
    setRunning(false);
    setSessionLength(25);
    setBreakLength(5);
    setOnBreak(false);
    setTimeLeft(25 * 60);
    resetAudio("beep");
  };


  React.useEffect(() => {
    let interval = null;
    if (running && timeLeft !== 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (!running && timeLeft !== 0) {
      clearInterval(interval);
    } else if (running && timeLeft == 0 && !onBreak) {
      setOnBreak(true);
      playAudio("beep");
      setTimeLeft(breakLength * 60);
    } else if (running && timeLeft == 0 && onBreak) {
      setOnBreak(false);
      playAudio("beep");
      setTimeLeft(sessionLength * 60);
    }

    return () => clearInterval(interval);
  }, [running, timeLeft]);



  return (

    React.createElement("main", null,

    React.createElement("h1", null, "Pomodoro Clock"),
    React.createElement("div", { id: "break-session-container" },
    React.createElement("div", { id: "break-label" },
    React.createElement("a", { id: "break-increment", onClick: () => !running ? labelHanlder("break-increment") : null }, "+"),
    React.createElement("p", { id: "break-length" }, breakLength),
    React.createElement("a", { id: "break-decrement", onClick: () => !running ? labelHanlder("break-decrement") : null }, "-")),

    React.createElement("div", { id: "session-label" },
    React.createElement("a", { id: "session-increment", onClick: () => !running ? labelHanlder("session-increment") : null }, "+"),
    React.createElement("p", { id: "session-length" }, sessionLength),
    React.createElement("a", { id: "session-decrement", onClick: () => !running ? labelHanlder("session-decrement") : null }, "-"))),


    React.createElement("div", { id: "timer-container" },
    React.createElement("h5", { id: "timer-label" }, onBreak ? "Break" : "Session"),
    React.createElement("h1", { id: "time-left" }, format(timeLeft))),


    React.createElement("div", { id: "controler" },
    React.createElement("button", { id: "start_stop", onClick: start_stop }, "start_stop"),
    React.createElement("button", { id: "reset", onClick: reset }, "reset")),

    React.createElement("audio", {
      id: "beep",
      preload: "auto",
      src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" })));




}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));