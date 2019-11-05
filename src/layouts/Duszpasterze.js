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

            <div className={classNames(classes.main, classes.mainRaised, "main-card-margin")}>

                <div className={classes.container}>
                    <div className={classes.normalPageTitleContainer}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12} >
                                <h2 className={classNames(classes.title, classes.grayText)}>Obecni Duszpasterze</h2>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>


                <div className={classes.container}>
                    <div className={classes.section} style={{ paddingTop: "px" }}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>



                                <Card plain>
                                    <GridItem xs={6} sm={4} md={4} className={classes.itemGrid}>
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
                                        <h5 className={classes.description} style={{ marginBottom: "0px" }}>
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


                            <GridItem xs={12} sm={12} md={6}>



                                <Card plain>
                                    <GridItem xs={6} sm={4} md={4} className={classes.itemGrid}>
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
                                        <h5 className={classes.description} style={{ marginBottom: "0px" }}>
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

                <div className={classes.container}>
                    <div className={classes.normalPageTitleContainer}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12} >
                                <h2 className={classNames(classes.title, classes.grayText)}>Byli duszpasterze</h2>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>

                <div className={classes.container}>
                    <div className={classes.section} style={{ paddingTop: "px" }}>

                <GridContainer justify="center">
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                    Ksiądz Przemysław Góra 
                                    <br />
                                    <small className={classes.smallTitle}>2016-2019</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Bartłomiej Franczak  
                                    <br />
                                    <small className={classes.smallTitle}>2015-2017</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Łukasz Tarnawski 
                                    <br />
                                    <small className={classes.smallTitle}>2012-2016</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Piotr Mieloszyński 
                                    <br />
                                    <small className={classes.smallTitle}>2014-2015</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Paweł Dziedziczak
                                    <br />
                                    <small className={classes.smallTitle}>2000 – 2014</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Jan Czekalski
                                    <br />
                                    <small className={classes.smallTitle}>2007 – 2012</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Marek Kaczmarek 
                                    <br />
                                    <small className={classes.smallTitle}>1996 – 2000</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Jan Słomka
                                    <br />
                                    <small className={classes.smallTitle}>1993 – 1996</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Paweł Lisowski
                                    <br />
                                    <small className={classes.smallTitle}>1990 – 2007</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Mirosław Strożka  
                                    <br />
                                    <small className={classes.smallTitle}>1975 – 1990</small>
                                </h5>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={2}>
                                <h5 className={classes.pastPriests}>
                                Ksiądz Jan Sobczak
                                    <br />
                                    <small className={classes.smallTitle}>1964 – 1974</small>
                                </h5>
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

Duszpasterze.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Duszpasterze
