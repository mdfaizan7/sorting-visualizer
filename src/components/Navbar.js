import React, { Component } from "react";
import { RightNav } from "./styled-components/RightNav";
import AppBar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  render() {
    const {
      resetArray,
      mergeSort,
      quickSort,
      selectionSort,
      insertionSort,
    } = this.props;

    return (
      <div>
        <AppBar style={{ background: "#202020" }} position="static">
          <Toolbar>
            <Button style={{ color: "#f04580" }} onClick={resetArray}>
              reset array
            </Button>
            <RightNav>
              <Button
                style={{ color: "rgb(117, 117, 238)" }}
                onClick={mergeSort}
              >
                Merge Sort
              </Button>
              <Button
                style={{ color: "rgb(117, 117, 238)" }}
                onClick={quickSort}
              >
                Quick Sort
              </Button>
              <Button
                style={{ color: "rgb(117, 117, 238)" }}
                onClick={insertionSort}
              >
                Insertion Sort
              </Button>
              <Button
                style={{ color: "rgb(104, 104, 255)" }}
                onClick={selectionSort}
              >
                Selection Sort
              </Button>
            </RightNav>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
