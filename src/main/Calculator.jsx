import React, { Component } from "react";
import "./Calculator.css";
import Display from "../components/display/Display";
import Button from "../components/button/Button";
export default class Calculator extends Component {
  clearMemory() {
    console.log("Limpar!");
  }
  addDigit(digit) {
    console.log(digit);
  }
  addOperation(operation) {
    console.log(operation);
  }
  render() {
    const addDigit = (digit) => this.addDigit(digit);
    const addOperation = (operation) => this.addOperation(operation);
    return (
      <div className="calculator">
        <Display value={100} />
        <Button label="AC" click={this.clearMemory} />
        <Button label="/" click={addOperation} />
        <Button label="7" click={addDigit} />
        <Button label="8" click={addDigit} />
        <Button label="9" click={addDigit} />
        <Button label="*" click={addOperation} />
        <Button label="4" click={addDigit} />
        <Button label="5" click={addDigit} />
        <Button label="6" click={addDigit} />
        <Button label="-" click={addOperation} />
        <Button label="1" click={addDigit} />
        <Button label="2" click={addDigit} />
        <Button label="3" click={addDigit} />
        <Button label="+" click={addOperation} />
        <Button label="0" click={addDigit} />
        <Button label="." click={addDigit} />
        <Button label="=" click={addOperation} />
      </div>
    );
  }
}
