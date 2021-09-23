import React, { Component } from "react";
import { TextField, MenuItem } from "@material-ui/core";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "prime",
      status: null,
    };
    this.numberInp = React.createRef();
  }

  handleNumber = (evt) => {
    const value = Number(evt.target.value);
    const { type } = this.state;
    if (typeof value == 'number') {
      this.numberInp.current.value = Math.max(1, Math.round(value));
      this.handleChangeType(type);
    }
  };

  handleChangeType = (type) => {
    const number = Number(this.numberInp.current.value);
    let status = false;
    if (type == "prime") {
      status = this.isPrime(number);
    } else {
      status = this.isFibonacci(number);
    }
    this.setState({ type, status });
  };

  isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  isPerfectSquare = (x) => {
    let s = parseInt(Math.sqrt(x));
    return s * s == x;
  };

  isFibonacci = (n) => {
    return (
      this.isPerfectSquare(5 * n * n + 4) || this.isPerfectSquare(5 * n * n - 4)
    );
  };

  render() {
    const { type, status } = this.state;
    return (
      <div id="question-1">
        <div className="box-1">
          <TextField
            placeholder="Enter number"
            variant="outlined"
            size="small"
            inputProps={{ ref: this.numberInp }}
            onBlur={this.handleNumber}
            InputProps={{ type: "number" }}
            defaultValue={1}
          />
        </div>
        <div className="box-2">
          <TextField
            placeholder="Select type"
            variant="outlined"
            size="small"
            value={type}
            select
            onChange={({ target }) => this.handleChangeType(target.value)}
          >
            <MenuItem value="prime">isPrime</MenuItem>
            <MenuItem value="fibonacci ">isFibonacci</MenuItem>
          </TextField>
        </div>
        <div className="box-3">{typeof status == "boolean" && `${status}`}</div>
      </div>
    );
  }
}
