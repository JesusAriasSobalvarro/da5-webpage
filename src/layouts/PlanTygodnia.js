// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames";

import React from "react"
import { useStaticQuery } from "gatsby"
import _ from "underscore"

// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
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

const PlanTygodnia = () => {
    const classes = useStyles();

    /*  ========================================================
        Query the JSON that contains the data for PlanTygodnia
    ========================================================== */
    const data = useStaticQuery(graphql`
    query getPlanTygodnia {
        allPlanTygodniaJson {
          edges {
            node {
              day
              date 
              events {
                hour
                name
              } 
            }
          }
        }
      }
  `)

    /*  ===============================================================
            Iterate through each day of the PlanTygodnia JSON, generate 
            a Card and map each subsequent event with its corresponding
            data.
        =============================================================== */
    var dailyPlan = [];
    if (data && data.allPlanTygodniaJson && data.allPlanTygodniaJson.edges) {
        _.each(data.allPlanTygodniaJson.edges, (item) => {
            dailyPlan.push(item.node);
        })
    }
    var dailyPlanCards = [];
    _.each(dailyPlan, item => {
        var events = [];
        _.each(item.events, event => {
            events.push(
                <h5 className={classNames(classes.description)} style={{ lineHeight: "0.8em", marginTop: "25px" }}>
                    <span style={{ lineHeight: "1.55em" }}>{event.hour} - </span>
                    <span style={{ lineHeight: "1.55em" }}>{event.name}</span>
                    <br />
                </h5>)
        })
        dailyPlanCards.push(
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardBody style={{ marginTop: "20px" }}>
                        <span className={classNames(classes.title)} style={{ fontSize: "1.4rem", lineHeight: "1.55em" }}>
                            {item.day}
                            <br />
                        </span>
                        <span className={classNames(classes.description)} style={{ fontSize: "1rem", lineHeight: "1.55em" }}>
                            {item.date}
                        </span>
                        {events}
                    </CardBody>
                </Card>
            </GridItem>)
    })

    return (
        <>
            <Header
                color="primary"
                routes={[]}
                brand="Duszpasterstwo Akademickie Piątka"
                rightLinks={<HeaderLinks />}
                fixed
            />

            {/*  ========================================================
                    Page Title
                ========================================================== */}
            <div className={classNames(classes.main, classes.mainRaised, "main-card-margin")}>

                <div className={classes.container}>
                    <div className={classes.normalPageTitleContainer}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12} >
                                <h2 className={classNames(classes.title, classes.grayText)}>Plan Tygodnia</h2>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>

                {/*  ========================================================
                        Dinamycally generated cards
                    ========================================================== */}
                <div className={classes.container}>
                    <div style={{ paddingBottom: "35px" }}>
                        <GridContainer>
                            {dailyPlanCards}
                        </GridContainer>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default PlanTygodnia
