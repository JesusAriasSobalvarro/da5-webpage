// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles"

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames"

import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import _ from "underscore"

// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Footer from "../components/Footer/Footer.js"

// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "./CustomClasses.js"
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const OazaGroup = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query NaszeInicjatywy {
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

  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })

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
        <Header color="white" routes={[]} rightLinks={<HeaderLinks />} fixed />
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

      <div
        className={classNames(
          classes.main,
          classes.mainRaised,
          "main-card-margin",
          "floating-card-width"
        )}
        style={{
          display: "inline-block",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          paddingLeft: "20px",
          paddingRight: "20px",
          borderRadius: "0px 0px 6px 6px",
        }}
      >
        {/* =============================================================
            Page title
          ============================================================= */}
        <div className={classes.container}>
          <div className={classes.normalPageTitleContainer}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classNames(classes.title, classes.grayText)}>
                  Nasze Inicjatywy
                </h2>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default OazaGroup
