import React, { Component } from "react";
// mui stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GithubCorner from 'react-github-corner'

class Navbar extends Component {
  render() {
    const {
      resetArray,
      mergeSort,
      heapSort,
      quickSort,
      insertionSort,
      bubbleSort,
      selectionSort,
    } = this.props;

    return (
      <AppBar style={{ background: "#202020" }} position="static">
      <GithubCorner href='https://github.com/mdfaizan7/sorting-visualizer' style={{zIndex: 10000}}/>

        <Toolbar>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item lg={2}>
              <Button
                style={{ color: "#f04580" }}
                onClick={resetArray}
                size="small"
              >
                reset array
              </Button>
            </Grid>
            <Grid item lg={2} />
            <Grid item lg={8}>
              <div>
                <Button
                  style={{ color: "#6e9ddb", marginLeft: "10px" }}
                  onClick={mergeSort}
                  size="small"
                >
                  Merge Sort
                </Button>
                <Button
                  style={{ color: "#6e9ddb", marginLeft: "10px" }}
                  onClick={heapSort}
                  size="small"
                >
                  Heap Sort
                </Button>
                <Button
                  style={{ color: "#6e9ddb", marginLeft: "10px" }}
                  onClick={quickSort}
                  size="small"
                >
                  Quick Sort
                </Button>
                <Button
                  style={{ color: "#6e9ddb", marginLeft: "10px" }}
                  onClick={insertionSort}
                  size="small"
                >
                  Insertion Sort
                </Button>
                <Button
                  style={{ color: "#6e9ddb", marginLeft: "10px" }}
                  onClick={bubbleSort}
                  size="small"
                >
                  Bubble Sort
                </Button>
                <Button
                  style={{ color: "#6e9ddb", marginLeft: "10px" }}
                  onClick={selectionSort}
                  size="small"
                >
                  Selection Sort
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
