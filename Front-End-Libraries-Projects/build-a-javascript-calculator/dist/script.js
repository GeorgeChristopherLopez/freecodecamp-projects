function App() {
  const [input, setInput] = React.useState(null);
  const [runningTotal, setTotal] = React.useState(0);
  const [output, setOutput] = React.useState("0");
  const [operator, setOperator] = React.useState("");

  const handleClick = e => {

    if (output !== "0") {
      setOutput(output + e.target.innerHTML);

    } else {
      setOutput(e.target.innerHTML);

    }
  };

  const handleMath = e => {
    setOperator(e.target.innerHTML);
    console.log(output[output.length - 1]);
    console.log(output.substring(0, output.length));

    if (isNaN(parseInt(output[output.length - 1]))) {
      if (e.target.innerHTML == "-")
      console.log('make it negative');

      setOutput(output.substring(0, output.length - 1) + e.target.innerHTML);


    } else if (output == "0") {
      // do nothing
    } else {
      setOutput(output + e.target.innerHTML);
    }

  };

  const handleClear = e => {
    setOutput("0");
    setInput(0);
    setTotal(0);
    setOperator("");
  };

  const handleSpecOp = e => {

  };
  const handleEquals = e => {
    let data = output.split(/[+-/x%]/);
    let ops = output.replace(/\d+/g, '');
    ops = ops.split('');
    let sum = parseInt(data[0]);
    let j = 0;
    for (let i = 1; i < data.length; i++) {
      console.log(data[i], ops[i - 1]);
      if (ops[i - 1] == "+" && !isNaN(parseInt(data[i])))
      sum = sum + parseInt(data[i]);
      if (ops[i - 1] == "x" && !isNaN(parseInt(data[i])))
      sum = sum * parseInt(data[i]);
      if (ops[i - 1] == "/" && !isNaN(parseInt(data[i])))
      sum = sum / parseInt(data[i]);
      if (ops[i - 1] == "-" && !isNaN(parseInt(data[i])))
      sum = sum - parseInt(data[i]);


    }
    console.log("operators:" +
    ops);
    console.log("data:" + data);

    setOutput(sum.toString());
    setInput(0);
    setTotal(0);
    setOperator("");
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
    React.createElement("button", { className: "operator", onClick: handleMath, id: "add" }, "+")),


    React.createElement("span", { className: "equals_row" },
    React.createElement("span", { className: "zero_row" },
    React.createElement("button", { onClick: handleClick, id: "zero" }, "0")),

    React.createElement("span", { className: "equals_row" },
    React.createElement("button", { onClick: handleDecimal, id: "decimal" }, "."),
    React.createElement("button", { className: "operator", id: "equals", onClick: handleEquals }, "=")))));




}

ReactDOM.render(
React.createElement(App, null),
document.getElementById('root'));