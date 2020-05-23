import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
// sorting algorithms
import { mergeSortAlgo } from "../util/MergeSort";
// styled components
import { StyledBar } from "./styled-components/StyledBar";
// mui stuff
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

class SortingVisualizer extends Component {
  state = { array: [] };

  componentDidMount() {
    this.resetArray();
  }

  resetArray = () => {
    const arr = [];
    const min = 10;
    const max = 580;
    for (let i = 0; i < 250; i++) {
      arr.push(Math.floor(Math.random() * (max - min) + min)); // pushes a random number between min and max
    }

    this.setState({ array: arr });
  };

  mergeSort = () => {
    const sortedArray = mergeSortAlgo(this.state.array);
    console.log(sortedArray);
    this.setState({ array: sortedArray });
  };

  render() {
    return (
      <Fragment>
        <Navbar resetArray={this.resetArray} mergeSort={this.mergeSort} />
        <Container style={{ paddingTop: "25px" }}>
          <Grid container direction="row" justify="center" alignItems="center">
            {this.state.array.map((val, idx) => (
              <Grid item key={idx}>
                <StyledBar height={val} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default SortingVisualizer;
