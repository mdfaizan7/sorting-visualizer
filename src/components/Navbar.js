import React, { Component } from "react";
import AppBar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar color="default" position="static">
          <Toolbar>
            <Button onClick={this.props.resetArray}>reset array</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
