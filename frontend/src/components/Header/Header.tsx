import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src="./logo.png" alt="logo" style={{ width: "100px" }} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
