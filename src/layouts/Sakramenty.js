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
import Card from "../components/Card/Card"
import CardBody from "../components/Card/CardBody"
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

const Sakramenty = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query getSakramentyPhotos {
      allFile(filter: { relativePath: { regex: "/^Sakramenty/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(fit: COVER) {
                ...GatsbyImageSharpFluid
              }
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

  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })

  const communionPic = _.select(data.allFile.edges, node => {
    return node.node.name === "holy-communion"
  })

  const confessionaryPic = _.select(data.allFile.edges, node => {
    return node.node.name === "confessionary"
  })
  return (
    <>
      <Header
        color="transparent"
        routes={[]}
        brand="Duszpasterstwo Akademickie Piątka"
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
          left: "50%", // Move the element to the left by 50% of the container's width
          transform: "translateX(-50%)",
        }}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/sacraments_banner.svg?alt=media&token=33ceb006-9af5-4ee9-a4ba-d9626103c401"
          className={classNames("normal-banner")}
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/sacraments_banner_mobile.svg?alt=media&token=cb954374-40c6-4418-b38c-8c6eca0c223f"
          className={classNames("mobile-banner")}
        />

        <div className={classes.container} style={{ padding: "0" }}>
          <div
            className={classes.section}
            style={{ padding: "0px 50px 70px 50px" }}
          >
            <GridContainer>
              <GridItem xs={12} sm={12} md={6} style={{ marginBottom: "20px" }}>
                <Card style={{ height: "100%", marginBottom: "20px" }}>
                  <Img
                    style={{
                      height: "225px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    className={classes.imgCardTop}
                    fluid={confessionaryPic[0].node.childImageSharp.fluid}
                    alt={confessionaryPic[0].node.name}
                  />
                  <CardBody>
                    <h5
                      className={classNames(classes.description)}
                      style={{ fontWeight: "bold" }}
                    >
                      Do spowiedzi można przystąpić na dwa sposoby:
                    </h5>
                    <h5 className={classNames(classes.description)}>
                      1. Umówić się z duszpasterzem na spowiedź pisząc na
                      fanpage duszpasterstwa lub bezpośrednio do księdza
                      duszpasterza.
                      <br />
                      2. Przyjść do kaplicy DA5 przed różańcem od godz. 18.00.*
                      <br />
                      Ponadto sakrament pokuty jest sprawowany w każdą niedzielę
                      podczas mszy akademickiej.
                      <br />
                      <br />
                      W przypadku nieobecności kapłana w konfesjonale przed
                      różańcem, prosimy o telefon.
                      <br />
                      „Numery do naszych księży podane są w zakładce
                      „Duszpasterze”.
                    </h5>
                  </CardBody>
                </Card>
              </GridItem>

              <GridItem xs={12} sm={12} md={6} style={{ marginBottom: "20px" }}>
                <Card style={{ height: "100%" }}>
                  <Img
                    style={{
                      height: "225px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    className={classes.imgCardTop}
                    alt={communionPic[0].node.name}
                    fluid={communionPic[0].node.childImageSharp.fluid}
                  />
                  <CardBody>
                    <h5
                      className={classNames(classes.description)}
                      style={{ fontWeight: "bold" }}
                    >
                      Msza św. jest sprawowana codziennie w godzinach podanych w
                      planie tygodniowym duszpasterstwa.
                    </h5>
                    <h5 className={classNames(classes.description)}>
                      Jeśli masz specjalną intencję, w której chcesz, by była
                      sprawowana msza, napisz do duszpasterza lub powiedz z
                      przynajmniej trzydniowym wyprzedzeniem.
                    </h5>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Sakramenty
