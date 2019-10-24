// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames";

import React from "react"
import PropTypes from "prop-types"

// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Footer from "../components/Footer/Footer.js";

// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js";
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css"

const useStyles = makeStyles(styles);

const Duszpasterze = () => {
  const classes = useStyles();

  return (
    <>
      <Header
        color="primary"
        routes={[]}
        brand="Duszpasterstwo Akademickie Piątka"
        rightLinks={<HeaderLinks />}
        fixed
      />

      <div className={classNames(classes.main, classes.mainRaised)} style={{ marginTop: "12vh" }}>
        <div className={classes.container}>
          <div className={classes.section}>

            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title} style={{ color: "#3C4858" }}>Duszpasterze</h2>
              </GridItem>
            </GridContainer>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} style={{ display: "flex", justifyContent: "center" }}>
                <img src={require("../assets/img/duszpasterze.jpg")} alt="" />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p style={{ fontFamily: "Roboto", fontWeight: "30", color: "#3C4858" }}>Ksiądz Przemysław Góra</p>
                <p style={{ fontFamily: "Roboto", fontWeight: "30", color: "#3C4858" }}>Ksiądz Radosław Krych</p>
              </GridItem>
            </GridContainer>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

Duszpasterze.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Duszpasterze
