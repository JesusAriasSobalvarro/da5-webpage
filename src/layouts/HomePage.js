// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles"
// nodejs library that concatenates classes -------------------------------
import classNames from "classnames"
import React from "react"
// import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import _ from "underscore"
import { facebookUrl, instagramUrl, openWebsite } from "./Common.js"
// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import Parallax from "../components/Parallax/Parallax"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Button from "../components/CustomButtons/Button"
import Footer from "../components/Footer/Footer.js"
import MapCard from "../components/Maps/MapCard.js"
import { Carousel } from "react-responsive-carousel"
import Card from "../components/Card/Card.js"
import CardBody from "../components/Card/CardBody.js"
import EventsToday from "../components/EventsToday/EventsToday"
import News from "../components/News/News"
//SVG's -------------------------------------------------------------------
import SpotkanieLogo from "../images/SVGs/Home/ico_how_to_start_1.svg"
import Wyjddz from "../images/SVGs/Home/ico_how_to_start_2.svg"
import Herbata from "../images/SVGs/Home/ico_how_to_start_3.svg"

//Banners -------------------------------------------------------------------
// import HowToStartBannerComponent from "../components/Banners/HowToStartBannerComponent"
// import NewsBannerComponent from "../components/Banners/NewsBannerComponent"
// import FollowUsBannerComponent from "../components/Banners/FollowUsComponent"
// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js"
import customStyles from "./CustomClasses.js"
import "react-responsive-carousel/lib/styles/carousel.min.css"

import "../assets/css/custom-style.css"
import { cardTitle } from "../assets/jss/material-kit-react.js"

// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import zIndex from "@material-ui/core/styles/zIndex";
import { useState } from "react"

const allStyles = {
  ...styles,
  ...customStyles,
  cardTitle,
}

const useStyles = makeStyles(allStyles)

const HomePage = (/*{ children }*/) => {
  const classes = useStyles()
  const [modalOpen, setModal] = useState(false)
  const [modalPic, setModalPic] = useState("")
  const [modalText, setModalText] = useState("")
  const [modalTitle, setModalTitle] = useState("")

  function modalClicked(open, url, title, text) {
    console.log("GOTHERE")
    console.log(text)
    setModal(open)
    setModalPic(url)
    setModalText(text)
    setModalTitle(title)
  }

  /*  ========================================================
    The following code queries pictures and data that will be
    dislayed in the Home Page
    ========================================================== */
  const data = useStaticQuery(graphql`
    query getHomePage {
      homePics: allFile(filter: { relativePath: { regex: "/^Home/" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(fit: COVER, quality: 100) {
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
              fluid(fit: COVER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  var homeEvents = []
  var homeEventsCards = []
  var homePics = []

  if (data && data.homePics && data.homePics.edges) {
    _.each(data.homePics.edges, item => {
      homePics.push(item.node)
    })
  }

  // if (data && data.backgroundPic && data.backgroundPic.edges) {

  //   _.each(data.backgroundPic.edges, item => {
  //     homePics.push(item.node);
  //     console.log(item.node)
  //   })
  // }

  /*  ========================================================
    Iterating through each Event of the query; mapping each element
    to its corresponding Image and returning a card element
  ========================================================== */

  if (data && data.homeEvents && data.homeEvents.edges) {
    _.each(data.homeEvents.edges, item => {
      homeEvents.push(item.node)
    })

    _.each(homeEvents, item => {
      var image = _.where(homePics, { name: item.image })
      var imageElement
      if (image) {
        imageElement = (
          <Img
            style={{ height: "225px", width: "100%" }}
            className={classes.imgCardTop}
            fluid={image[0].childImageSharp.fluid}
            alt={image[0].name}
          />
        )
      }

      homeEventsCards.push(
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{ textAlign: "center" }}
          key={image[0].name}
        >
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

  const kaplica = _.select(data.homePics.edges, node => {
    return node.node.name === "kaplica"
  })

  /*  ========================================================
    The following constants store pictures that will be displayed
    in the carousel
  ========================================================== */

  const stMaximilian = _.select(data.homePics.edges, node => {
    return node.node.name === "maximilian-kolbe"
  })

  const popeFrancis = _.select(data.homePics.edges, node => {
    return node.node.name === "pope-francis"
  })

  const quoteBackground = _.select(data.homePics.edges, node => {
    return node.node.name === "quote_back"
  })

  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })

  return (
    <div className={ modalOpen ? "modal-block" : "" }>

      { modalOpen &&
        <div style={{ 
          backgroundColor: "black",
          opacity: "0.9",
          width: "100%", 
          height: "100%", 
          position: "fixed", 
          zIndex:"499"}}>
        </div>
      }

      {!modalOpen && (
        <Header
          color="transparent"
          routes={[]}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 100,
            color: "white",
          }}
        />
      )}

      {/* <img src="https://ak5.picdn.net/shutterstock/videos/430195/thumb/1.jpg" style={{ zIndex: "-10", position:"fixed",
    opacity: "0.6", width:"100%", height:"100%"}}/> */}

      {modalOpen && (
        <Card
          className="modal-width"
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "500",
            height: "85vh",
            margin: "0",
          }}
        >
          <img
            src={modalPic}
            style={{ height: "225px", width: "100%", overflowY:"hidden"}}
            alt=""
            className={classes.imgCardTop}
          />
          <p
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
              padding: "5px 10px",
              cursor: "pointer",
            }}
            onClick={() => setModal(false)}
          >
            X
          </p>

          <CardBody style={{ minHeight: "225px", overflowY:"scroll" }}>
            <h5 className={classes.cardTitle} style={{ textAlign: "center" }}>
              {modalTitle}
            </h5>
            <p style={{ lineHeight: "2" }}>{modalText}</p>
          </CardBody>
        </Card>
      )}

      <Img
        style={{
          zIndex: "-10",
          position: "fixed",
          opacity: "0.6",
          width: "100%",
          height: "100%",
        }}
        className={classes.imgCardTop}
        fluid={background[0].node.childImageSharp.fluid}
        alt={background[0].node.name}
      />

      {/*  ========================================================
            Kaplica image with website Title
          ========================================================== */}
      <Parallax filterZ>
        <Img
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          className={classes.imgCardTop}
          fluid={kaplica[0].node.childImageSharp.fluid}
          alt={kaplica[0].node.name}
        />
        <div className={classes.container}>
          <GridContainer
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <GridItem xs={12} sm={12} md={8} style={{ marginBottom: "15px" }}>
              <h1
                className={classNames(
                  classes.title,
                  "main-page-title",
                  "home-title-320"
                )}
              >
                Duszpasterstwo Akademickie Piątka
              </h1>

              <h4 className={classNames("home-hide-415")}>
                Przyjdź, drzwi dla Ciebie są zawsze otwarte!
              </h4>

              {/* <br /> */}

              {/* <Button
                className={classNames("home-hide-415")}
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer">
                <i className={"fa fa-play"} style={{ marginRight: "5px" }}
                />
                Watch video
              </Button> */}
            </GridItem>
            <GridItem
              xs={8}
              sm={8}
              md={4}
              style={{ alignSelf: "center" }}
              style={{ padding: "0px" }}
            >
              <EventsToday />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div
        className={classNames(
          classes.main,
          classes.mainRaised,
          "homeRaisedDiv"
        )}
      >
        {/* ==========================================================
              Jak zacząć element
            ========================================================== */}

        {/* <div className={classNames("header-background")}>
          <HowToStartBannerComponent isMobile={SimpleMediaQuery()} /> 
          </div> */}

        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/how_to_start_banner.svg?alt=media&token=cb331a4c-0f05-4a5d-8912-2b0772c3a049"
            className={classNames("normal-banner")}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/how_to_start_mobile_banner.svg?alt=media&token=09596653-aea1-43a1-9ff1-3cbdbb46a2e6"
            className={classNames("mobile-banner")}
          />
        </div>

        {/* <p>{SimpleMediaQuery()}</p> */}

        {/* <div className={classNames("header-background")}></div> */}

        <div className={classes.container}>
          <div className={classes.firstSection}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <Herbata className={classNames(classes.svgLogo)} />
                    <h5
                      className={classNames(
                        classes.description,
                        classes.purpleSubtitle
                      )}
                    >
                      Wejdź na herbatę
                    </h5>
                    <h5
                      className={classNames(
                        classes.description,
                        classes.grayText
                      )}
                    >
                      po Mszy Świętej Akademickiej w niedzielę o 19.00
                    </h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <SpotkanieLogo className={classNames(classes.svgLogo)} />
                    <h5
                      className={classNames(
                        classes.description,
                        classes.purpleSubtitle
                      )}
                    >
                      Przyjdź na spotkanie formacyjne
                    </h5>
                    <h5
                      className={classNames(
                        classes.description,
                        classes.grayText
                      )}
                    >
                      w środę o 19.00
                    </h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <Wyjddz className={classNames(classes.svgLogo)} />
                    <h5
                      className={classNames(
                        classes.description,
                        classes.purpleSubtitle
                      )}
                    >
                      Wyjedż z nami
                    </h5>
                    <h5
                      className={classNames(
                        classes.description,
                        classes.grayText
                      )}
                    >
                      na ferie, wakacje, długi weekend lub weź udział w lużnym
                      spotkaniu integracyjnym
                    </h5>
                  </GridItem>
                </GridContainer>
                <h5
                  className={classNames(classes.description, classes.grayText)}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Aliquam mollis auctor libero.
                </h5>
                <Button color="primary" size="lg">
                  Start
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* 
          <div>
          <NewsBannerComponent isMobile={SimpleMediaQuery()} /> 
          </div> */}

        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/news_banner.svg?alt=media&token=9171ba79-62c2-4a1e-9845-affc9de1ef46"
            className={classNames("normal-banner")}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/news_banner_mobile.svg?alt=media&token=eecca23c-4343-4316-95af-4cf39084d210"
            className={classNames("mobile-banner")}
          />
        </div>

        <div className={classes.container}>
          {/* ==========================================================
                Aktualności
              ========================================================== */}

          <div className={classes.section}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}></GridItem>
            </GridContainer>
            <GridContainer
              style={{
                display: "flex",
                justifyContent:
                  homeEventsCards.length < 3 ? "center" : "flex-start",
              }}
            >
              {/* {homeEventsCards} */}
              <News
                openModal={(shouldOpen, url, title, description) =>
                  modalClicked(shouldOpen, url, title, description)
                }
              />
            </GridContainer>
          </div>
        </div>

        <div className={classes.section}>
          {/* ==========================================================
                  Carousel
                ========================================================== */}
          <GridContainer justify="center">
            <GridItem
              xs={12}
              sm={12}
              md={12}
              style={{ height: "250px", position: "relative" }}
            >
              <Carousel
                className={"carousel"}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                interval={6000}
              >
                <div className={classes.fullHeight}>
                  <div className={classes.overlay}>
                    <p className={"quoteBody"}>
                      Freedom consists not in doing what we like, but having the
                      right to do what we ought.
                    </p>
                    <p className={"quoteAuthor"}>Saint John Paul II</p>
                  </div>
                </div>
                <div className={classes.fullHeight}>
                  <div className={classes.overlay}>
                    <p className={"quoteBody"}>
                      The world tells us to seek success, power and money; God
                      tells us to seek humility, service and love.
                    </p>
                    <p className={"quoteAuthor"}>Pope Francis</p>
                  </div>
                </div>

                {/* <Img
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
                    </div> */}
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>

        {/* <div>
          <FollowUsBannerComponent isMobile={SimpleMediaQuery()} /> 
          </div> */}

        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/follow_us_banner.svg?alt=media&token=0811ce3e-54f0-4a02-816e-97ccca414c98"
            className={classNames("normal-banner")}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/follow_us_banner_mobile.svg?alt=media&token=dca2d8c2-9aa7-4964-b032-2aee74b18947"
            className={classNames("mobile-banner")}
          />
        </div>

        <div className={classes.container}>
          {/* ==========================================================
                Facebook & Instagram 
              ========================================================== */}
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <h5
                  className={classNames(classes.description, classes.grayText)}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <br />
                  Aliquam mollis auctor libero.
                </h5>
              </GridItem>
            </GridContainer>

            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <span
                  className="fa-stack fa-4x"
                  style={{ cursor: "pointer" }}
                  onClick={() => openWebsite(facebookUrl)}
                >
                  <i
                    className="fa fa-circle fa-stack-2x"
                    style={{ color: "#9c27b0" }}
                  ></i>
                  <i className="fa fa-facebook fa-stack-1x"></i>
                </span>
                <h5
                  className={classNames(classes.description, classes.grayText)}
                >
                  Facebook
                </h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <span
                  className="fa-stack fa-4x"
                  style={{ cursor: "pointer" }}
                  onClick={() => openWebsite(instagramUrl)}
                >
                  <i
                    className="fa fa-circle fa-stack-2x"
                    style={{ color: "#9c27b0" }}
                  ></i>
                  <i className="fa fa-instagram fa-stack-1x"></i>
                </span>
                <h5
                  className={classNames(classes.description, classes.grayText)}
                >
                  Instagram
                </h5>
              </GridItem>
            </GridContainer>
          </div>
        </div>

        {/* ==========================================================
                How to find us
              ========================================================== */}

        <div className={classes.container}>
          <MapCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

// HomePage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default HomePage
