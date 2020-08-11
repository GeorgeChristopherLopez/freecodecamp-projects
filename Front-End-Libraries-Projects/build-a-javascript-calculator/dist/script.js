function Welcome(props) {
  return React.createElement("h1", null, "Hello, ", props.name);
}

function App() {
  const [input, setInput] = React.useState("0");
  const [output, setOutput] = React.useState("0");
  const handleClick = e => {
    console.log(e.target.innerHTML);
    if (output !== "0")
    setOutput(output + e.target.innerHTML);else

    setOutput(e.target.innerHTML);
  };
  const handleMath = e => {

  };

  const handleClear = e => {
    setOutput("0");
  };

  const handleSpecOp = e => {

  };

  const handleDecimal = e => {
  };

  return (
    React.createElement("div", { id: "calculator" },
    React.createElement("div", { id: "display" }, output),


    React.createElement("span", null,
    React.createElement("button", { className: "special_op", onClick: handleClear, id: "clear" }, "AC"),
    React.createElement("button", { className: "special_op", onClick: handleSpecOp, id: "sign" }, "+/-"),
    React.createElement("button", { className: "special_op", onClick: handleSpecOp, id: "module" }, "%"),
    React.createElement("button", { className: "operator", onClick: handleMath, id: "divide" }, "/")),



    React.createElement("span", null,
    React.createElement("button", { onClick: handleClick, id: "seven" }, "7"),
    React.createElement("button", { onClick: handleClick, id: "eight" }, "8"),
    React.createElement("button", { onClick: handleClick, id: "nine" }, "9"),
    React.createElement("button", { className: "operator", onClick: handleMath, id: "multiply" }, "x")),


    React.createElement("span", null,
    React.createElement("button", { onClick: handleClick, id: "four" }, "4"),
    React.createElement("button", { onClick: handleClick, id: "five" }, "5"),
    React.createElement("button", { onClick: handleClick, id: "six" }, "6"),
    React.createElement("button", { className: "operator", onClick: handleMath, id: "subtract" }, "-")),


    React.createElement("span", null,
    React.createElement("button", { onClick: handleClick, id: "one" }, "1"), "      ", React.createElement("button", { onClick: handleClick, id: "two" }, "2"),
    React.createElement("button", { onClick: handleClick, id: "three" }, "3"),
    React.createElement("button", { className: "operator", onClick: handleSpecOp, id: "add" }, "+")),


    React.createElement("span", { className: "equals_row" },
    React.createElement("span", { className: "zero_row" },
    React.createElement("button", { onClick: handleClick, id: "zero" }, "0")),

    React.createElement("span", { className: "equals_row" },
    React.createElement("button", { onClick: handleDecimal, id: "decimal" }, "."),
    React.createElement("button", { className: "operator", onClick: handleMath, id: "equals", onClick: handleMath }, "=")))));




}

ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));