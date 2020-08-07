function Editor(props) {

  return React.createElement("section", { className: "editor-section" },
  React.createElement("div", { className: "editor-container" }, React.createElement("div", { className: "editor-header" }, React.createElement("span", null, React.createElement("button", null, "!"), "Editor"), React.createElement("button", { className: "resizeBtn" }, "X")), React.createElement("textarea", { onChange: () => console.log(event.target.value), id: "editor" }, "this is a test of the emergency broadcast center")));




}

function Preview(props) {
  return (
    React.createElement("div", { className: "preview-container" },
    React.createElement("div", { className: "preview-header" }, React.createElement("span", null, React.createElement("button", null, "!"), "Preview"), React.createElement("button", { className: "resizeBtn" }, "X")),
    React.createElement("div", { id: "preview" }, React.createElement("h1", null, "Markdown"))));


}


function App() {
  return (

    React.createElement(React.Fragment, null,
    React.createElement(Editor, { name: "Edite" }),
    React.createElement(Preview, null)));


}

ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));