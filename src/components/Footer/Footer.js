import React from "react";
// nodejs library to set properties for components ------------------------------
import PropTypes from "prop-types";

// nodejs library that concatenates classes -------------------------------------
import classNames from "classnames";

import { facebookUrl, instagramUrl } from "../../layouts/Common.js";

// material-ui core components --------------------------------------------------
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";

// Styles -----------------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/components/footerStyle";
import "../../assets/css/custom-style.css";
import customClasses from "../../layouts/CustomClasses.js";

const style = {
  ...styles,
  ...customClasses
}

const useStyles = makeStyles(style);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            {/* <ListItem className={classes.inlineBlock}>
              <h4 style={{fontSize:"1rem"}}>© 2013-2018 Duszpasterswo Akademickie "Piątka" w Łodzi, ul. Skorupki 5 | Strona używa plików cookies.</h4>
            </ListItem>  */}
            <ListItem className={classes.inlineBlock}>
              <span className={classes.block}>Follow Us:</span>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href={facebookUrl}>
                <i className={classes.socialIcons + " fa fa-facebook-square"} />
              </a>
              <a href={instagramUrl}>
                <i className={classes.socialIcons + " fa fa-instagram"} />
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=mkr-footer"
                className={classes.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem> */}
          </List>
        </div>
        <div className={classNames(classes.right, classes.footerRightText)}>
          &copy; 2013-{1900 + new Date().getYear()}{" "}Duszpasterswo Akademickie "Piątka" w Łodzi |
        Made with <Favorite className={classNames(classes.icon, classes.primaryColorText)} /> using Creative Tim and GatsbyJS
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
