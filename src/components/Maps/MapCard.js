import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import Card from "../../components/Card/Card.js"
import CardBody from "../../components/Card/CardBody.js"

import styles from "../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import imagesStyles from "../../assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "../../assets/jss/material-kit-react.js";
import MapContainer from "./MapContainer.js";

const style = {
  ...imagesStyles,
  cardTitle,
  ...styles
}

const useStyles = makeStyles(style);


export default function MapCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.section} style={{ paddingTop: "0px" }}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Jak do nas trafić?</h2>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center" >
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody style={{ minHeight: "350px", padding: "0px" }}>
              <MapContainer></MapContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
