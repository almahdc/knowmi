import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";

// Style
import classes from "./ContactMeItem.module.scss";

const contactMeItem = props => {
  return (
    <>
      {props.isLink ? (
        <a href={props.link} color="#f9ba32" className={classes.Item}>
          {props.socialMedia}
        </a>
      ) : (
        <CopyToClipboard text={props.socialMedia}>
          <div
            className={classes.Item}
            onClick={props.clicked({vertical: "bottom", horizontal: "right"})}
          >
            {props.socialMedia}
          </div>
        </CopyToClipboard>
      )}
    </>
  );
};

export default contactMeItem;
