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
import Footer from "../components/Footer/Footer.js"

// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "./CustomClasses.js"
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css"
import { Link } from "gatsby"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const GrupyIWspolnoty = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query getGrupyIWspolnotyPhotos {
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
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/groups_banner.svg?alt=media&token=975c28d0-9c69-4062-8f1c-35a5dbfe2337"
          className={classNames("normal-banner")}
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/groups_banner_mobile.svg?alt=media&token=04448c28-90d5-44bd-9685-252ed0debbf2"
          className={classNames("mobile-banner")}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "70%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Link to="/grupy/oaza" className={classes.navLink}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                margin: "20px 10px 30px 10px",
                minWidth: "200px",
              }}
            >
              <img
                style={{ width: "100px" }}
                src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/group_icon-06.svg?alt=media&token=d597284c-0d43-460e-af54-0fdb470ae6e6"
              ></img>
              <p className={classNames(classes.boldText)}>OAZA</p>
              <p className={classNames(classes.lightText)}>
                Ruch Światło Życie
              </p>
            </div>
          </Link>

          <Link to="/grupy/exodus" className={classes.navLink}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                margin: "20px 10px 30px 10px",
                minWidth: "200px",
              }}
            >
              <img
                style={{ width: "100px" }}
                src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/group_icon_01.svg?alt=media&token=5ba21e7c-8dc7-49aa-b4c4-2a678553a444"
              ></img>
              <p className={classNames(classes.lightText)}>Meska wspólnota</p>
              <p className={classNames(classes.boldText)}>EXODUS</p>
            </div>
          </Link>

          <Link to="/grupy/oaza" className={classes.navLink}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                margin: "20px 10px 30px 10px",
                minWidth: "200px",
              }}
            >
              <img
                style={{ width: "100px" }}
                src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/group_icon-02.svg?alt=media&token=d6df4b6b-f961-499e-8c9e-f08ddb600ccb"
              ></img>
              <p className={classNames(classes.boldText)}>SPOTKANIA</p>
              <p className={classNames(classes.lightText)}>Biblijne</p>
            </div>
          </Link>

          <Link to="/grupy/oaza" className={classes.navLink}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                margin: "20px 10px 30px 10px",
                minWidth: "200px",
              }}
            >
              <img
                style={{ width: "100px" }}
                src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/group_icon-04.svg?alt=media&token=f69eab1f-2e8f-40d0-bcfa-0a8e092e148e"
              ></img>
              <p className={classNames(classes.boldText)}>SCHOLA</p>
              <p className={classNames(classes.lightText)}>Akademicka</p>
            </div>
          </Link>

          <Link to="/grupy/oaza" className={classes.navLink}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                margin: "20px 10px 30px 10px",
                minWidth: "200px",
              }}
            >
              <img
                style={{ width: "100px" }}
                src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/group_icon-03.svg?alt=media&token=2a5bf365-2961-48a5-ba70-c2fad8ce96fc"
              ></img>
              <p className={classNames(classes.lightText)}>Liturgiczna</p>
              <p className={classNames(classes.boldText)}>SŁUŻBA OŁTARZA</p>
            </div>
          </Link>

          <Link to="/grupy/swietlica-dla-niepelnosprawnych" className={classes.navLink}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                margin: "20px 10px 30px 10px",
                minWidth: "200px",
              }}
            >
              <img
                style={{ width: "100px" }}
                src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/group_icon-08.svg?alt=media&token=055c68c8-ad2a-4855-8977-78e8d62d9b4a"
              ></img>
              <p className={classNames(classes.boldText)}>ŚWIETLICA</p>
              <p className={classNames(classes.lightText)}>
                dla niepełnosprawnych
              </p>
            </div>
          </Link>

          <Link to="/grupy/oaza" className={classes.navLink}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                margin: "20px 10px 30px 10px",
                minWidth: "200px",
              }}
            >
              <img
                style={{ width: "100px" }}
                src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/group_icon-05.svg?alt=media&token=5bacbb27-b8ab-4fea-9cee-9622ebdb0622"
              ></img>
              <p className={classNames(classes.lightText)}>Studenckie</p>
              <p className={classNames(classes.boldText)}>UWIELBIENIA</p>
            </div>
          </Link>

          <Link to="/grupy/oaza" className={classes.navLink}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
                margin: "20px 10px 30px 10px",
                minWidth: "200px",
              }}
            >
              <img
                style={{ width: "100px" }}
                src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/group_icon-07.svg?alt=media&token=0264f9af-6fd9-4fa7-b607-679c33e5a5b4"
              ></img>
              <p className={classNames(classes.boldText)}>SPORTOWA</p>
              <p className={classNames(classes.lightText)}>niedziela</p>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default GrupyIWspolnoty
