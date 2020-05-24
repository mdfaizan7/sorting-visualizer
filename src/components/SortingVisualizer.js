import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
// sorting animations
import { mergeSortAnimations } from "../util/MergeSort";
import { quickSortAnimations } from "../util/QuickSort";
import { insertionSortAnimations } from "../util/InsertionSort";
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
    for (let i = 0; i < 130; i++) {
      arr.push(Math.floor(Math.random() * (max - min) + min)); // pushes a random number between min and max
    }

    this.setState({ array: arr, ex1: 200, ex2: 200, pivot: 200 });
  };

  mergeSort = () => {
    let sortingAnimations = mergeSortAnimations(this.state.array, 0, 129);
    for (let i = 0; i < sortingAnimations.length - 1; i++) {
      setTimeout(() => {
        let { array, ex1, ex2 } = sortingAnimations[i];
        this.setState({
          array,
          ex1,
          ex2,
        });
      }, i * 1);
    }
  };

  quickSort = () => {
    let sortingAnimations = quickSortAnimations(this.state.array, 0, 129);
    for (let i = 0; i < sortingAnimations.length; i++) {
      setTimeout(() => {
        let { array, pivot, ex1, ex2 } = sortingAnimations[i];
        this.setState({
          array,
          pivot,
          ex1,
          ex2,
        });
      }, i * 1);
    }
  };

  insertionSort = () => {
    let sortingAnimations = insertionSortAnimations(this.state.array);
    for (let i = 0; i < sortingAnimations.length - 1; i++) {
      setTimeout(() => {
        let { array, ex1, ex2 } = sortingAnimations[i];
        this.setState({
          array,
          ex1,
          ex2,
        });
      }, i * 1);
    }
  };

  selectionSort = () => {
    // TODO: make visualizer for selection sort
  };

  render() {
    return (
      <Fragment>
        <Navbar
          resetArray={this.resetArray}
          mergeSort={this.mergeSort}
          quickSort={this.quickSort}
          insertionSort={this.insertionSort}
          selectionSort={this.selectionSort}
        />
        <Container style={{ paddingTop: "25px" }}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-end"
          >
            {this.state.array.map((val, idx) => (
              <Grid item key={idx}>
                {idx === this.state.pivot ? (
                  <StyledBar height={val} color="red" />
                ) : idx === this.state.ex1 || idx === this.state.ex2 ? (
                  <StyledBar height={val} color="orange" />
                ) : (
                  <StyledBar height={val} color="seagreen" />
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default SortingVisualizer;
