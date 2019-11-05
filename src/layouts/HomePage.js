// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames";

import React from "react";
// import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby";
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
import EventSection from "./EventSection";
import { Carousel } from "react-responsive-carousel";

// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js";
import customStyles from "./CustomClasses.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "font-awesome/css/font-awesome.min.css";
import "../assets/css/custom-style.css";

const allStyles = {
  ...styles,
  ...customStyles
}

const useStyles = makeStyles(allStyles);

const HomePage = (/*{ children }*/) => {
  const classes = useStyles();

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const mockData = [
    {
      name: "Zapraszamy Na Rekolekcje Na Dobry Początek",
      description: "",
      image: "http://da5.lodz.pl/wp-content/uploads/0001.jpg",
      date: "2019-10-19T01:30:00.000Z"
    },
    {
      name: "Event 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "http://da5.lodz.pl/wp-content/uploads/pielgrzymka-oda.jpg",
      date: "2019-10-19T01:30:00.000Z"
    },
    {
      name: "Ogólnopolska Pielgrzymka Akademicka na Jasną Górę",
      description: "Serdecznie Was zapraszamy do wzięcia udziału w 83 Ogólnopolskiej Pielgrzymce Akademickiej na Jasną Górę. Pani Jasnogórskiej będziemy zawierzać nasze studiowanie, egzaminy, wybór dalszej drogi. Wyruszamy spod DA5 w piątek około 15.00. Zapisywać można się do środy pisząc wiadomość na fanpage lub bezpośrednio w siedzibie DA przy ul. Skorupki 5.",
      image: "http://da5.lodz.pl/wp-content/uploads/Biblia-polska-promo-6.png",
      date: "2019-10-19T01:30:00.000Z"
    }
  ]

  const mockData2 = [
    {
      name: "Zapraszamy Na Rekolekcje Na Dobry Początek",
      description: "",
      image: "http://da5.lodz.pl/wp-content/uploads/0001.jpg",
      date: "2019-10-19T01:30:00.000Z"
    }
  ]

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

      <Parallax filter image={require("../assets/img/kaplica-2-1024x666.jpg")}>
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
                rel="noopener noreferrer"
              >
                <i className={"fa fa-play"} style={{ marginRight: "5px" }} />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
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

          <EventSection title={"Nadchodzące Wydarzenia"} events={mockData}></EventSection>

          <div className={classes.section}>
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
                    <img className={classNames(classes.fullHeight, classes.sliderImage)} src={require("../assets/img/pope-francis.jpg")} />
                    <div className={classes.overlay}>
                      <p className={"quoteBody"}>The world tells us to seek success, power and money; God tells us to seek humility, service and love.</p>
                      <p className={"quoteAuthor"}>Pope Francis</p>
                    </div>
                  </div>
                  <div className={classes.fullHeight}>
                    <img className={classNames(classes.fullHeight, classes.sliderImage)} src={require("../assets/img/john-paul-ii.jpg")} />
                    <div className={classes.overlay}>
                      <p className={"quoteBody"}>Freedom consists not in doing what we like, but having the right to do what we ought.</p>
                      <p className={"quoteAuthor"}>Saint John Paul II</p>
                    </div>
                  </div>
                  <div className={classes.fullHeight}>
                    <img className={classNames(classes.fullHeight, classes.sliderImage)} src={require("../assets/img/maximilian-kolbe.jpg")} />
                    <div className={classes.overlay}>
                      <p className={"quoteBody"}>Let us remember that love lives through sacrifice and is nourished by giving. Without sacrifice there is no love.</p>
                      <p className={"quoteAuthor"}>Sain Maximilian Kolbe</p>
                    </div>
                  </div>
                </Carousel>
              </GridItem>
            </GridContainer>
          </div>

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
                <span className="fa-stack fa-4x" style={{cursor: "pointer"}} onClick={() => openWebsite(facebookUrl)}>
                  <i className="fa fa-circle fa-stack-2x" style={{color: "#9c27b0"}}></i>
                  <i className="fa fa-facebook fa-stack-1x"></i>
                </span>
                <h5 className={classNames(classes.description, classes.grayText)}>Facebook</h5>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <span className="fa-stack fa-4x" style={{cursor: "pointer"}} onClick={() => openWebsite(instagramUrl)}>
                  <i className="fa fa-circle fa-stack-2x" style={{color: "#9c27b0"}}></i>
                  <i className="fa fa-instagram fa-stack-1x"></i>
                </span>
                <h5 className={classNames(classes.description, classes.grayText)}>Instagram</h5>
              </GridItem>
            </GridContainer>
          </div>

          <MapCard />

        </div>
      </div>

      <Footer />

      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div> */}
    </>
  )
}

// HomePage.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default HomePage
