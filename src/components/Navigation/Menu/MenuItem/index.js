import React from "react";

// Style
import classes from "./MenuItem.module.scss";

import {NavHashLink as NavLink} from "react-router-hash-link";

const menuItem = props => {
  return (
    <NavLink
      className={classes.MenuItem}
      to={{pathname: props.path.pathName, hash: props.path.hash}}
      smooth
      onClick={props.clicked}
    >
      {props.menuItemTitle}
    </NavLink>
  );
};

export default menuItem;
