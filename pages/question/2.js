import axios from "axios";
import React, { Component } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
} from "@material-ui/core";

export default class Home extends Component {
  state = {
    data: [],
    filterData: [],
  };

  componentDidMount() {
    axios.get("https://api.publicapis.org/categories").then((res) => {
      this.setState({ data: res.data, filterData: res.data });
    });
  }

  handleChange = (evt) => {
    const { value } = evt.target;
    const { data } = this.state;
    const filterData = data.filter((item) => item.includes(value));
    this.setState({ filterData });
  };

  render() {
    const { data, filterData } = this.state;
    return (
      <div className="container py-4">
        <TextField
          className="mb-2"
          label="Name"
          variant="outlined"
          size="small"
          fullWidth
          onInput={this.handleChange}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="fw-bold">Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
