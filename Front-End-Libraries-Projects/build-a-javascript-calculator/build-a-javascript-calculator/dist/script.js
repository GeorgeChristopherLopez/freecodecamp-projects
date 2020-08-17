function App() {
  const [input, setInput] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [output, setOutput] = React.useState("0");
  const [prevOp, setPrevOp] = React.useState("");
  const [nextNegative, setNextNegative] = React.useState(false);
  const handleClick = e => {


    if (output == "0" || isNaN(parseInt(output)) && !nextNegative) {
      setOutput(e.target.innerHTML);
      setInput(parseInt(e.target.innerHTML));
    } else if (isNaN(parseInt(output))) {
      handleMath();
      setOutput(e.target.innerHTML);
      setInput(parseInt(e.target.innerHTML));
    } else {
      setOutput(output + e.target.innerHTML);
      setInput(parseInt(output + e.target.innerHTML));
    }


  };

  const handleOp = e => {
    if (e.target.innerHTML == "-" && isNaN(parseInt(output))) {
      setNextNegative(true);
    } else {
      setNextNegative(false);

      if (prevOp == "") {
        setInput(parseInt(output));
        setTotal(parseInt(output));

      }
      setPrevOp(e.target.innerHTML);
    }

    setOutput(e.target.innerHTML);



  };

  const handleMath = () => {


    let res = 0;

    if (prevOp == "+") {
      res = total + input;
    } else if (prevOp == "-") {
      res = total - input;
    } else if (prevOp == "/") {
      res = total / input;
    } else if (prevOp == "x") {
      res = total * input;
    }

    setTotal(res);
    setInput("");


  };
  const handleClear = e => {
    setInput(0);
    setOutput("0");
    setTotal(0);
    setPrevOp("");
  };

  const handleSpecOp = e => {

  };

  const handleEquals = e => {

    if (isNaN(parseInt(output))) {

      setOutput(total.toString());

    } else {
      let res = 0;

      if (prevOp == "+") {
        res = total + input;
      } else if (prevOp == "-") {
        res = total - input;
      } else if (prevOp == "/") {
        res = total / input;
      } else if (prevOp == "x") {
        res = total * input;
      }

      setOutput(res.toString());
      setTotal();
      setInput("");
      setPrevOp("");
    }

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
    React.createElement("button", { className: "operator", onClick: handleOp, id: "divide" }, "/")),



    React.createElement("span", null,
    React.createElement("button", { onClick: handleClick, id: "seven" }, "7"),
    React.createElement("button", { onClick: handleClick, id: "eight" }, "8"),
    React.createElement("button", { onClick: handleClick, id: "nine" }, "9"),
    React.createElement("button", { className: "operator", onClick: handleOp, id: "multiply" }, "x")),


    React.createElement("span", null,
    React.createElement("button", { onClick: handleClick, id: "four" }, "4"),
    React.createElement("button", { onClick: handleClick, id: "five" }, "5"),
    React.createElement("button", { onClick: handleClick, id: "six" }, "6"),
    React.createElement("button", { className: "operator", onClick: handleOp, id: "subtract" }, "-")),


    React.createElement("span", null,
    React.createElement("button", { onClick: handleClick, id: "one" }, "1"), "      ", React.createElement("button", { onClick: handleClick, id: "two" }, "2"),
    React.createElement("button", { onClick: handleClick, id: "three" }, "3"),
    React.createElement("button", { className: "operator", onClick: handleOp, id: "add" }, "+")),


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