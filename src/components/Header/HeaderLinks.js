/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "gatsby";
import window from 'global'

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle";
import "font-awesome/css/font-awesome.min.css";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { color }= props;
  console.log(color)
  return (
    <List className={classes.list}>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Plan"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/plantygodnia" className={classes.dropdownLink}>
              Plan Tygodnia
            </Link>,
            <Link to="/wtymmiesiacu" className={classes.dropdownLink}>
            W Tym Miesiacu
            </Link>
          ]}
        />
      </ListItem>
{/* 
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        > Aktualności
        </Button>
      </ListItem> */}

      <ListItem className={classes.listItem}>
        <Link to="/grupyiwspolnoty" className={classes.navLink}>Grupy i wspólnoty</Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/galeria" className={classes.navLink}>Galeria</Link>
      </ListItem>


      <ListItem className={classes.listItem}>
        <Link to="/duszpasterze" className={classes.navLink}>Duszpasterze</Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/sakramenty" className={classes.navLink}>Sakramenty</Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to="/naszeinicjatywy" className={classes.navLink}>Nasze Inicjatywy</Link>
      </ListItem>


      {/* <ListItem className={classes.listItem}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Śledź nas na acebooku"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/da.piatka"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-facebook-square"} />
          </Button>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Obserwuj nas na Instagramie"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/dapiatka/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

HeaderLinks.propTypes = {
  color: PropTypes.string
};
