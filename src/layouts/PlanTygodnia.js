// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles"

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames"

import React, { useContext, useEffect, useState } from "react"
import { useStaticQuery } from "gatsby"
import _ from "underscore"

// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Card from "../components/Card/Card"
import CardBody from "../components/Card/CardBody"
import Footer from "../components/Footer/Footer.js"

import Img from "gatsby-image"

// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "./CustomClasses.js"
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css"

import { FirebaseContext } from "./../utils/firebase"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const PlanTygodnia = () => {
  const classes = useStyles()

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

      backgroundPic: allFile(
        filter: { relativePath: { regex: "/Background/" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(fit: COVER, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const firebase = useContext(FirebaseContext)
  const [eventsToDisplay, setList] = useState(null)
  const ref = firebase.firestore().collection(`weeklyPlan`)
  var daysCards = []

  useEffect(() => {
    ref
      .get()
      .then(snapshot => {
        if (!snapshot) {
          setList(list => [])
        } else {
          let events = []
          snapshot.forEach(x => {
            events.push({ ...x.data() })
          })

          //var today = getDayOfTheWeek();
          let eventsSorted = _.chain(events)
            .map(x => {
              return {
                hour: x.hour,
                name: x.name,
                day: x.day.toLowerCase(),
              }
            })
            .sortBy(x => {
              return x.hour
            })
            .groupBy(x => {
              return x.day
            })
            .value()

          console.log(eventsSorted)

          var namesOfDays = [
            "poniedziałek",
            "wtorek",
            "środa",
            "czwartek",
            "piątek",
            "sobota",
            "niedziela",
          ]

          namesOfDays.forEach(day => {
            //console.log(eventsSorted[day])
            var eventsPerDay = []
            if (eventsSorted[day] != undefined) {
              eventsSorted[day].forEach(event => {
                eventsPerDay.push(
                  <h5
                    className={classNames(classes.description)}
                    style={{ lineHeight: "0.8em", marginTop: "25px" }}
                  >
                    <span style={{ lineHeight: "1.55em", fontWeight: "bold" }}>
                      {event.hour} -{" "}
                    </span>
                    <span style={{ lineHeight: "1.55em" }}>{event.name}</span>
                    <br />
                  </h5>
                )
              })
            }

            daysCards.push(
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <CardBody style={{ marginTop: "20px" }}>
                    <span
                      className={classNames(classes.title)}
                      style={{ fontSize: "1.4rem", lineHeight: "1.55em" }}
                    >
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                      <br />
                    </span>
                    {/* <span className={classNames(classes.description)} style={{ fontSize: "1rem", lineHeight: "1.55em" }}>
                            {item.date}
                        </span> */}
                    {/* {events} */}
                    {eventsPerDay}
                  </CardBody>
                </Card>
              </GridItem>
            )
          })

          console.log(daysCards)

          // _.each(eventsSorted, event => {
          //   data.push(
          //     // <div key={"EventToday-"+event.name}>
          //     //   <span style={{ fontWeight: "bold" }}>{event.hour}</span>
          //     //   <span> - </span>
          //     //   <span>{event.name}</span>
          //     // </div>
          //   )
          // })

          setList(list => daysCards)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })

  /*  ===============================================================
            Iterate through each day of the PlanTygodnia JSON, generate 
            a Card and map each subsequent event with its corresponding
            data.
        =============================================================== */
  // var dailyPlan = [];
  // if (data && data.allPlanTygodniaJson && data.allPlanTygodniaJson.edges) {
  //     _.each(data.allPlanTygodniaJson.edges, (item) => {
  //         dailyPlan.push(item.node);
  //     })
  // }
  // var dailyPlanCards = [];
  // _.each(dailyPlan, item => {
  //     var events = [];
  //     _.each(item.events, event => {
  //         events.push(
  //             <h5 className={classNames(classes.description)} style={{ lineHeight: "0.8em", marginTop: "25px" }}>
  //                 <span style={{ lineHeight: "1.55em" }}>{event.hour} - </span>
  //                 <span style={{ lineHeight: "1.55em" }}>{event.name}</span>
  //                 <br />
  //             </h5>)
  //     })
  //     dailyPlanCards.push(
  //         <GridItem xs={12} sm={12} md={12}>
  //             <Card>
  //                 <CardBody style={{ marginTop: "20px" }}>
  //                     <span className={classNames(classes.title)} style={{ fontSize: "1.4rem", lineHeight: "1.55em" }}>
  //                         {item.day}
  //                         <br />
  //                     </span>
  //                     <span className={classNames(classes.description)} style={{ fontSize: "1rem", lineHeight: "1.55em" }}>
  //                         {item.date}
  //                     </span>
  //                     {events}
  //                 </CardBody>
  //             </Card>
  //         </GridItem>)
  // })

  return (
    <>
      <Header
        color="transparent"
        routes={[]}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white",
        }}
      />

      <div className={classNames("mobile-banner")}>
            <Header 
                color="white" 
                routes={[]} 
                rightLinks={<HeaderLinks />} 
                fixed />
      </div>

      <Img
        style={{
          position: "fixed",
          opacity: "0.6",
          width: "100%",
          height: "100%",
        }}
        fluid={background[0].node.childImageSharp.fluid}
        alt={background[0].node.name}
      />

      {/*  ========================================================
                    Page Title
                ========================================================== */}
      <div
        className={classNames(
          classes.main,
          classes.mainRaised,
          "floating-card-width",
          "main-card-margin"
        )}
        style={{
          display: "inline-block",
          position: "relative",
          left: "50%", // Move the element to the left by 50% of the container's width
          transform: "translateX(-50%)",
          overflowX:"hidden"
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/weekly_plan_banner.svg?alt=media&token=de0dcbfa-1cce-4e7e-9af8-fc52a10e332f"
          className={classNames("normal-banner")}
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/weekly_plan_banner_mobile.svg?alt=media&token=196ffa1b-81ef-4f4b-a177-2109b80387e2"
          className={classNames("mobile-banner")}
        />
        {/* 
                <div className={classes.container}>
                    <div className={classes.normalPageTitleContainer}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12} >
                                <h2 className={classNames(classes.title, classes.grayText)}>Plan Tygodnia</h2>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div> */}

        {/*  ========================================================
                        Dinamycally generated cards
                    ========================================================== */}

        <GridContainer style={{ paddingLeft: "40px", paddingRight: "40px" }}>
          {/* {dailyPlanCards} */}
          {eventsToDisplay}
        </GridContainer>
      </div>

      <Footer />
    </>
  )
}

export default PlanTygodnia
