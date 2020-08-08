function Editor(props) {

  return React.createElement("section", { className: "editor-section" },
  React.createElement("div", { className: "editor-container" }, React.createElement("div", { className: "editor-header" }, React.createElement("span", null, React.createElement("button", null, "!"), "Editor"), React.createElement("button", { className: "resizeBtn" }, "X")), React.createElement("textarea", { onChange: props.onChange, id: "editor" }, "this is a test of the emergency broadcast center")));




}

function Preview(props) {
  const text = props.display;
  function getMarkdownText() {
    var rawMarkup = marked(text, { sanitize: true });
    return { __html: rawMarkup };
  }


  return (
    React.createElement("div", { className: "preview-container" },
    React.createElement("div", { className: "preview-header" }, React.createElement("span", null, React.createElement("button", null, "!"), "Preview"), React.createElement("button", { className: "resizeBtn" }, "X")),
    React.createElement("div", { id: "preview", dangerouslySetInnerHTML: getMarkdownText() })));


}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "this is a test of the emergency state and props system" };


    this.handleChange = this.handleChange.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }


  handleChange() {
    let mark = this.getMarkdownText();
    this.setState(state => ({
      text: event.target.value }));


  }
  getMarkdownText() {
    var rawMarkup = marked('This is _Markdown_.');
    return { __html: rawMarkup };
  }


  render() {
    return (
      React.createElement("div", null,
      React.createElement(Editor, { onChange: this.handleChange }),
      React.createElement(Preview, { display: this.state.text })));


  }}



ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));