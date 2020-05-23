import React, { Component } from "react";
import { RightNav } from "./styled-components/RightNav";
import AppBar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar color="default" position="static">
          <Toolbar>
            <Button color="secondary" onClick={this.props.resetArray}>
              reset array
            </Button>
            <RightNav>
              <Button color="primary" onClick={this.props.mergeSort}>
                Merge Sort
              </Button>
              <Button color="primary" onClick={this.props.resetArray}>
                Quick Sort
              </Button>
              <Button color="primary" onClick={this.props.resetArray}>
                Insertion Sort
              </Button>
              <Button color="primary" onClick={this.props.resetArray}>
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
