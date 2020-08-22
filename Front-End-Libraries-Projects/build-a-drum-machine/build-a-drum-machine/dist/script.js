class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayText: "Drum Machine",
      displayItems: {
        "Q": "Heater 1",
        "W": "Heater 2",
        "E": "Heater 3",
        "A": "Heater 4",
        "S": "Clap",
        "D": "Open HH",
        "Z": "Kick n' Hat",
        "X": "Kick",
        "C": "Closed HH" } };



    this.playAudio = this.playAudio.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  playAudio(e) {
    document.getElementById(e).play();
    this.handleDisplay(e);
  }
  handleKeys(event) {
    const key = event.keyCode;

    if (key == 81)
    this.playAudio("Q");
    if (key == 87)
    this.playAudio("W");
    if (key == 69)
    this.playAudio("E");
    if (key == 65)
    this.playAudio("A");
    if (key == 83)
    this.playAudio("S");
    if (key == 68)
    this.playAudio("D");
    if (key == 90)
    this.playAudio("Z");
    if (key == 88)
    this.playAudio("X");
    if (key == 67)
    this.playAudio("C");
  }
  handleDisplay(e) {
    console.log(this.state.displayItems[e]);
    this.setState(state => ({
      displayText: this.state.displayItems[e] }));

  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeys);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeys);
  }
  render() {
    return (

      React.createElement(React.Fragment, null,
      React.createElement("div", { id: "display-container" },
      React.createElement("div", { id: "display" },
      this.state.displayText),

      React.createElement("h1", null, "Drum Machine")),


      React.createElement("div", { id: "drum-pad-container" },
      React.createElement("button", { id: "AudioQ", className: "drum-pad", onClick: () => this.playAudio("Q") }, "Q ", React.createElement("audio", { className: "clip", id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", preload: "auto" })),

      React.createElement("button", { id: "AudioW", className: "drum-pad", onClick: () => this.playAudio("W") }, "W  ", React.createElement("audio", { className: "clip", id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", preload: "auto" })),

      React.createElement("button", { id: "AudioE", className: "drum-pad", onClick: () => this.playAudio("E") }, "E  ", React.createElement("audio", { className: "clip", id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", preload: "auto" })),
      React.createElement("br", null),

      React.createElement("button", { id: "AudioA", className: "drum-pad", onClick: () => this.playAudio("A") }, "A  ", React.createElement("audio", { className: "clip", id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", preload: "auto" })),
      React.createElement("button", { id: "AudioS", className: "drum-pad", onClick: () => this.playAudio("S") }, "S  ", React.createElement("audio", { className: "clip", id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", preload: "auto" })),
      React.createElement("button", { id: "AudioD", className: "drum-pad", onClick: () => this.playAudio("D") }, "D  ", React.createElement("audio", { className: "clip", id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", preload: "auto" })),
      React.createElement("br", null),
      React.createElement("button", { id: "AudioZ", className: "drum-pad", onClick: () => this.playAudio("Z") }, "Z  ", React.createElement("audio", { className: "clip", id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", preload: "auto" })),
      React.createElement("button", { id: "AudioX", className: "drum-pad", onClick: () => this.playAudio("X") }, "X  ", React.createElement("audio", { className: "clip", id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", preload: "auto" })),
      React.createElement("button", { id: "AudioC", className: "drum-pad", onClick: () => this.playAudio("C") }, "C  ", React.createElement("audio", { className: "clip", id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", preload: "auto" })))));








  }}




ReactDOM.render(
React.createElement(App, { onKeyDown: this.handleKeyDown }),
document.getElementById('drum-machine'));