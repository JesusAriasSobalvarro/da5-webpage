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
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardFooter from "../components/Card/CardFooter";
import Button from "../components/CustomButtons/Button";
import Footer from "../components/Footer/Footer.js";

// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js";
import teamStyles from "../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import customStyles from "./CustomClasses.js";
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles
}

const useStyles = makeStyles(allStyles);

const GrupyIWspolnoty = () => {
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

      <div className={classNames(classes.main, classes.mainRaised, "main-card-margin")}>

        <div className={classes.container}>
          <div className={classes.normalPageTitleContainer}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} >
                <h2 className={classNames(classes.title, classes.grayText)}>Grupy I Wspólnoty</h2>
              </GridItem>
            </GridContainer>
          </div>
        </div>


        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <img src="https://www.cohealth.org.au/wp-content/uploads/2016/05/Community-Group-for-min-page.png" style={{
                  width: "100%",
                  borderRadius: "6px", height: "320px", objectFit: "cover"
                }} />
                <h5 className={classNames(classes.description, classes.grayText)}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus lectus dictum est tincidunt eleifend.
                  Curabitur eu ante sit amet sapien fringilla efficitur facilisis in dui. In justo erat, dictum et mattis at, gravida a est.
                  Nullam faucibus ex eu lectus semper, dapibus viverra erat finibus. Cras sed pellentesque purus.
                  Phasellus at sem elit. Fusce sed nisl non lectus ultricies sollicitudin at et leo. Vestibulum sed nisi purus.
                  Cras id ullamcorper diam. Nulla nec rhoncus elit.
            </h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>



                <Card plain>
                  <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                    <img src="https://i.redd.it/6onq25y0sh311.jpg" alt="..." className={classNames(classes.imgRaised,
                      classes.imgRoundedCircle,
                      classes.imgFluid)} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Tomek Hadid
                <br />
                    <small className={classes.smallTitle}>Lider</small>
                  </h4>
                  <CardBody>
                    <h5 className={classes.description} style={{marginBottom:"0px"}}>
                      You can write here details about one of your team members. You
                      can give more details about what they do. Feel free to add
                      some links for people to be able to
                      follow them outside the site.
                </h5>
                  </CardBody>
                  <CardFooter className={classNames(classes.justifyCenter, classes.contactContainer)}>
                  <div>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}>
                        <i className={classes.socials + " fa fa-envelope"} />
                      </Button>
                      <a href="mailto:somemail@gmail.com" className={classNames(classes.primaryColorText, classes.margin5, classes.spanText)}>testmail@gmail.com</a>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5} >
                      <i className={classes.socials + " fa fa-phone"} />
                    </Button>
                      <span className={classNames(classes.margin5, classes.spanText, classes.description)}>+48 123 456 789</span>
                    </div>

                                        

                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5} >
                        <i className={classes.socials + " fa fa-facebook"} />
                      </Button>
                      <a href="#" className={classNames(classes.margin5, classes.spanText, classes.description)} style={{ textDecoration: "none" }}>http://facebook.com</a>
                    </div>

                  </div>

                  </CardFooter>
                </Card>



              </GridItem>
            </GridContainer>
          </div>
        </div>



        {/* <img src="https://loremipsumcorp.com/wp-content/themes/loremipsum/img/share.png" style={{width: "100%"}} /> */}
        {/* <GridContainer>
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
            </GridContainer> */}

      </div>

      <Footer />
    </>
  )
}

// GrupyIWspolnoty.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default GrupyIWspolnoty
