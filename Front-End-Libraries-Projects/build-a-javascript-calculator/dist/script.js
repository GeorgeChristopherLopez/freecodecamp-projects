function App() {
  const [input, setInput] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [output, setOutput] = React.useState("0");
  const [prevOp, setPrevOp] = React.useState("");
  const [nextNegative, setNextNegative] = React.useState(false);



  const handleClick = e => {

    if (output == "0" || isNaN(parseInt(output)) && !nextNegative) {
      // handleMath()
      setOutput(e.target.innerHTML);
      setInput(parseInt(e.target.innerHTML));

    } else if (isNaN(parseInt(output[output.length - 1])) && nextNegative) {
      //   handleMath();
      setOutput(output + e.target.innerHTML);
      setInput(parseInt(output + e.target.innerHTML));
    } else {
      setOutput(output + e.target.innerHTML);
      setInput(parseFloat(output + e.target.innerHTML));
      console.log(input);
    }

    console.log(e.target.innerHTML, total);
  };

  const handleOp = e => {
    console.log("previous is NUMBER" + !isNaN(parseInt(output)));
    console.log("previous operator is: " + prevOp);
    console.log("previous input is: " + input);
    if (e.target.innerHTML == "-" && isNaN(parseInt(output))) {
      setNextNegative(true);
    } else if (prevOp == "") {
      setNextNegative(false);
      setInput(parseFloat(output));
      setTotal(parseFloat(output));
      setPrevOp(e.target.innerHTML);

    } else if (!isNaN(parseInt(output))) {
      setNextNegative(false);
      console.log("do math now????");
      let res = 0.0;

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
      setPrevOp(e.target.innerHTML);
    } else {
      setNextNegative(false);
      setPrevOp(e.target.innerHTML);
    }


    setOutput(e.target.innerHTML);


  };

  let handleMath = function () {


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

    console.log(e.target.innerHTML, total);
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
    if (!output.includes(".") && !isNaN(parseInt(output))) {
      setOutput(output + ".");
    } else if (isNaN(parseInt(output))) {
      setOutput("0.");
    }
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