import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
// sorting algorithms
import { mergeSortAlgo } from "../util/MergeSort";
import { quickSortAnimations } from "../util/QuickSort";
// styled components
import { StyledBar } from "./styled-components/StyledBar";
// mui stuff
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

class SortingVisualizer extends Component {
  state = { array: [], sortingAlgorithm: "" };

  componentDidMount() {
    this.resetArray();
  }

  resetArray = () => {
    const arr = [];
    const min = 10;
    const max = 580;
    for (let i = 0; i < 130; i++) {
      arr.push(Math.floor(Math.random() * (max - min) + min)); // pushes a random number between min and max
    }

    this.setState({ array: arr });
  };

  mergeSort = () => {
    const sortedArray = mergeSortAlgo(this.state.array);
    console.log(sortedArray);
    this.setState({ array: sortedArray });
  };

  quickSort = () => {
    const sortingAnimations = quickSortAnimations(this.state.array, 0, 129);
    for (let i = 0; i < sortingAnimations.length; i++) {
      setTimeout(() => {
        const { array, pivot, ex1, ex2 } = sortingAnimations[i];
        if (i === sortingAnimations.length - 1) {
          this.setState({
            array,
            pivot: -1,
            ex1: -1,
            ex2: -1,
            sortingAlgorithm: "",
          });
        } else {
          this.setState({
            array,
            pivot,
            ex1,
            ex2,
            sortingAlgorithm: "mergeSort",
          });
        }
      }, 1);
    }
  };

  render() {
    return (
      <Fragment>
        <Navbar
          resetArray={this.resetArray}
          mergeSort={this.mergeSort}
          quickSort={this.quickSort}
        />
        <Container style={{ paddingTop: "25px" }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
          >
            {this.state.array.map((val, idx) => {
              if (this.state.sortingAlgorithm === "mergeSort") {
                return (
                  <Grid item key={idx}>
                    {idx === this.state.pivot ? (
                      <StyledBar height={val} color="red" />
                    ) : idx === this.state.ex1 || idx === this.state.ex2 ? (
                      <StyledBar height={val} color="orange" />
                    ) : (
                      <StyledBar height={val} color="seagreen" />
                    )}
                  </Grid>
                );
              } else {
                return (
                  <Grid item key={idx}>
                    <StyledBar height={val} color="seagreen" />
                  </Grid>
                );
              }
            })}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default SortingVisualizer;
