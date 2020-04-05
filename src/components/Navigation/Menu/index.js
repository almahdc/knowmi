import React from 'react';

// Style
import { MenuItem } from '@material-ui/core';

const menu = ( props ) => (
    <nav>
      {props.hasToken ? <MenuItem>LOGOUT</MenuItem> : <MenuItem>LOGIN</MenuItem> }
    </nav>
);

export default menu;
