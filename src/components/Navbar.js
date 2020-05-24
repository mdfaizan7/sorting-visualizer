import React, { Component } from "react";
import { RightNav } from "./styled-components/RightNav";
import AppBar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar style={{ background: "#202020" }} position="static">
          <Toolbar>
            <Button
              style={{ color: "#f04580" }}
              onClick={this.props.resetArray}
            >
              reset array
            </Button>
            <RightNav>
              <Button
                style={{ color: "rgb(117, 117, 238)" }}
                onClick={this.props.mergeSort}
              >
                Merge Sort
              </Button>
              <Button
                style={{ color: "rgb(117, 117, 238)" }}
                onClick={this.props.quickSort}
              >
                Quick Sort
              </Button>
              <Button
                style={{ color: "rgb(117, 117, 238)" }}
                onClick={this.props.resetArray}
              >
                Insertion Sort
              </Button>
              <Button
                style={{ color: "rgb(104, 104, 255)" }}
                onClick={this.props.resetArray}
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
