import React from "react";

// Style
import {ButtonGroup, Snackbar} from "@material-ui/core";
import classes from "./ContactMe.module.scss";

// Components
import SimpleTitleContent from "../../SimpleTitleContent";
import ContactMeItem from "./ContactMeItem";

// Data
import {contactMeData} from "./ContactMeData";

export default function ContactMe(props) {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center"
  });

  const {vertical, horizontal, open} = state;

  const handleClick = newState => e => {
    console.log("haloo");
    setState({open: true, ...newState});
  };

  const test = () => {
    console.log("halalala");
  };

  const handleClose = () => {
    setState({...state, open: false});
  };

  return (
    <SimpleTitleContent header={props.header} align="left" id="alma">
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained primary button group"
        variant="text"
        style={{width: "100%"}}
      >
        {contactMeData.map(contactMe => (
          <ContactMeItem
            key={contactMe.socialMedia}
            isLink={contactMe.payload.link}
            socialMedia={contactMe.socialMedia}
            link={contactMe.payload.link}
            clicked={newState => handleClick(newState)}
          />
        ))}
      </ButtonGroup>
      <Snackbar
        anchorOrigin={{vertical, horizontal}}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
        message="Copied successfuly"
      />
    </SimpleTitleContent>
  );
}
