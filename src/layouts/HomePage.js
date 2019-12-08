// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes -------------------------------
import classNames from "classnames";
import React from "react";
// import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import _ from "underscore"
import { facebookUrl, instagramUrl, openWebsite } from "./Common.js";
// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax/Parallax";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/CustomButtons/Button"
import Footer from "../components/Footer/Footer.js";
import MapCard from "../components/Maps/MapCard.js";
import { Carousel } from "react-responsive-carousel";
import Card from "../components/Card/Card.js"
import CardBody from "../components/Card/CardBody.js"
// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js";
import customStyles from "./CustomClasses.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../assets/css/custom-style.css";
import { cardTitle } from "../assets/jss/material-kit-react.js";

const allStyles = {
  ...styles,
  ...customStyles,
  cardTitle
}

const useStyles = makeStyles(allStyles);

const HomePage = (/*{ children }*/) => {
  const classes = useStyles();

  /*  ========================================================
    The following code queries pictures and data that will be
    dislayed in the Home Page
    ========================================================== */
  const data = useStaticQuery(graphql`
    query getHomePage {
        homePics: allFile(filter: {relativePath: {regex: "/^Home/"}}) {
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
        homeEvents: allHomeJson {
          edges {
            node {
              title
              description,
              image
            }
          }
        }
      }
  `)

  var homeEvents = [];
  var homeEventsCards = [];
  var homePics = [];

  if (data && data.homePics && data.homePics.edges) {
    _.each(data.homePics.edges, item => {
      homePics.push(item.node);
    })
  }

  /*  ========================================================
    Iterating through each Event of the query; mapping each element
    to its corresponding Image and returning a card element
  ========================================================== */

  if (data && data.homeEvents && data.homeEvents.edges) {
    _.each(data.homeEvents.edges, item => {
      homeEvents.push(item.node);
    })

    _.each(homeEvents, item => {
      var image = _.where(homePics, { name: item.image })
      var imageElement;
      if (image) {
        imageElement = <Img
          style={{ height: "225px", width: "100%" }}
          className={classes.imgCardTop}
          fluid={image[0].childImageSharp.fluid}
          alt={image[0].name}
        />
      }

      homeEventsCards.push(
        <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
          <Card>
            {imageElement}
            <CardBody style={{ minHeight: "225px" }}>
              <h5 className={classes.cardTitle}>{item.title}</h5>
              <p style={{ lineHeight: "2" }}>{item.description}</p>
            </CardBody>
          </Card>
        </GridItem>
      )
    })
  }

  const kaplica = _.select(data.homePics.edges, (node) => {
    return node.node.name === "kaplica"
  })

  /*  ========================================================
    The following constants store pictures that will be displayed
    in the carousel
  ========================================================== */

  const stMaximilian = _.select(data.homePics.edges, (node) => {
    return node.node.name === "maximilian-kolbe"
  })

  const popeFrancis = _.select(data.homePics.edges, (node) => {
    return node.node.name === "pope-francis"
  })

  const stJohnPaul = _.select(data.homePics.edges, (node) => {
    return node.node.name === "john-paul-ii"
  })

  return (
    <>
      <Header
        color="transparent"
        routes={[]}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }} />

      {/*  ========================================================
            Kaplica image with website Title
          ========================================================== */}
      <Parallax filterZ>
        <Img
          style={{ position: "absolute", height: "100%", width: "100%", objectFit: "cover" }}
          className={classes.imgCardTop}
          fluid={kaplica[0].node.childImageSharp.fluid}
          alt={kaplica[0].node.name}
        />
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classNames(classes.title, "main-page-title")}>Duszpasterstwo Akademickie Piątka</h1>
              <h4>
                Przyjdź, drzwi dla Ciebie są zawsze otwarte!
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer">
                <i className={"fa fa-play"} style={{ marginRight: "5px" }} />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* ==========================================================
              Jak zacząć element
            ========================================================== */}
        <div className={classes.container}>
          <div className={classes.firstSection}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classNames(classes.title, classes.grayText)}>Jak zacząć</h2>
                <h5 className={classNames(classes.description, classes.grayText)}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Aliquam mollis auctor libero.
                </h5>
                <Button color="primary" size="lg">Start</Button>
              </GridItem>
            </GridContainer>
          </div>

          {/* ==========================================================
                Aktualności
              ========================================================== */}
          <div className={classes.section}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classNames(classes.title, classes.grayText)}>Aktualności</h2>
              </GridItem>
            </GridContainer>
            <GridContainer style={{ display: "flex", justifyContent: (homeEventsCards.length < 3) ? "center" : "flex-start" }}>
              {homeEventsCards}
            </GridContainer>
          </div>

          <div className={classes.section}>
            {/* ==========================================================
                  Carousel
                ========================================================== */}
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <Carousel
                  className={'carousel'}
                  showStatus={false}
                  showThumbs={false}
                  autoPlay={true}
                  infiniteLoop={true}
                  interval={6000}>
                  <div className={classes.fullHeight}>
                    <Img
                      style={{ height: "100%", width: "100%" }}
                      className={classes.imgCardTop}
                      fluid={popeFrancis[0].node.childImageSharp.fluid}
                      alt={popeFrancis[0].node.name}
                    />
                    <div className={classes.overlay}>
                      <p className={"quoteBody"}>The world tells us to seek success, power and money; God tells us to seek humility, service and love.</p>
                      <p className={"quoteAuthor"}>Pope Francis</p>
                    </div>
                  </div>
                  <div className={classes.fullHeight}>
                    <Img
                      style={{ height: "100%", width: "100%" }}
                      className={classes.imgCardTop}
                      fluid={stJohnPaul[0].node.childImageSharp.fluid}
                      alt={stJohnPaul[0].node.name}
                    />
                    <div className={classes.overlay}>
                      <p className={"quoteBody"}>Freedom consists not in doing what we like, but having the right to do what we ought.</p>
                      <p className={"quoteAuthor"}>Saint John Paul II</p>
                    </div>
                  </div>
                  <div className={classes.fullHeight}>
                    <Img
                      style={{ height: "100%", width: "100%" }}
                      className={classes.imgCardTop}
                      fluid={stMaximilian[0].node.childImageSharp.fluid}
                      alt={stMaximilian[0].node.name}
                    />
                    <div className={classes.overlay}>
                      <p className={"quoteBody"}>Let us remember that love lives through sacrifice and is nourished by giving. Without sacrifice there is no love.</p>
                      <p className={"quoteAuthor"}>Sain Maximilian Kolbe</p>
                    </div>
                  </div>
                </Carousel>
              </GridItem>
            </GridContainer>
          </div>

          {/* ==========================================================
                Facebook & Instagram 
              ========================================================== */}
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <h2 className={classNames(classes.title, classes.grayText)}>Follow Us</h2>
                <h5 className={classNames(classes.description, classes.grayText)}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Aliquam mollis auctor libero.
                </h5>
              </GridItem>
            </GridContainer>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <span className="fa-stack fa-4x" style={{ cursor: "pointer" }} onClick={() => openWebsite(facebookUrl)}>
                  <i className="fa fa-circle fa-stack-2x" style={{ color: "#9c27b0" }}></i>
                  <i className="fa fa-facebook fa-stack-1x"></i>
                </span>
                <h5 className={classNames(classes.description, classes.grayText)}>Facebook</h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <span className="fa-stack fa-4x" style={{ cursor: "pointer" }} onClick={() => openWebsite(instagramUrl)}>
                  <i className="fa fa-circle fa-stack-2x" style={{ color: "#9c27b0" }}></i>
                  <i className="fa fa-instagram fa-stack-1x"></i>
                </span>
                <h5 className={classNames(classes.description, classes.grayText)}>Instagram</h5>
              </GridItem>
            </GridContainer>
          </div>

          {/* ==========================================================
                How to find us
              ========================================================== */}
          <MapCard />
        </div>
      </div>
      <Footer />
    </>
  )
}

// HomePage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default HomePage
