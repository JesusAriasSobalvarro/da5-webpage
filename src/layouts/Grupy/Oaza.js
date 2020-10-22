// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames";

import React from "react"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"
import _ from "underscore"

// Components used in this layout -----------------------------------------
import Header from "../../components/Header/Header"
import HeaderLinks from "../../components/Header/HeaderLinks"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";
import Button from "../../components/CustomButtons/Button";
import Footer from "../../components/Footer/Footer.js";

// Styles -----------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import customStyles from "../CustomClasses";
import "font-awesome/css/font-awesome.min.css"
import "../../assets/css/custom-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles
}

const useStyles = makeStyles(allStyles);

const OazaGroup = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
  query oazaGetPictures {
      allFile(filter: {relativePath: {regex: "/^GrupyIWspolnoty/"}}) {
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

      backgroundPic: allFile(filter: {relativePath: {regex: "/Background/"}}) {
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

  const wspolnotyPic = _.select(data.allFile.edges, (node) => {
    return node.node.name === "community"
  })

  const background = _.select(data.backgroundPic.edges, (node) => {
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
          color: "white"
        }} 
      />



<Img
                      style={{ position: 'fixed', opacity: "0.6", width:"100%", height:"100%"}}
                      fluid={background[0].node.childImageSharp.fluid}
                      alt={background[0].node.name}
                    />


      <div className={classNames(classes.main, classes.mainRaised, "main-card-margin")}
                  style={{
                    width:'80%', 
                    display: 'inline-block',
                    position: 'relative',
                left: '50%', // Move the element to the left by 50% of the container's width
                transform: 'translateX(-50%)',
                paddingLeft: '20px',
                paddingRight: '20px'
            }}
                
      
      
      >
      {/* =============================================================
            Page title
          ============================================================= */}
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
              {/* =============================================================
                    Grupy picture and description
                  ============================================================= */}
              <GridItem xs={12} sm={12} md={8}>
                <Img
                  style={{
                    width: "100%", objectFit: "cover",
                    borderRadius: "3px", marginBottom: "10px"
                  }}
                  fluid={wspolnotyPic[0].node.childImageSharp.fluid}
                  alt={wspolnotyPic[0].node.name}
                />
                <h5 className={classNames(classes.description, classes.grayText)}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus lectus dictum est tincidunt eleifend.
                  Curabitur eu ante sit amet sapien fringilla efficitur facilisis in dui. In justo erat, dictum et mattis at, gravida a est.
                  Nullam faucibus ex eu lectus semper, dapibus viverra erat finibus. Cras sed pellentesque purus.
                  Phasellus at sem elit. Fusce sed nisl non lectus ultricies sollicitudin at et leo. Vestibulum sed nisi purus.
                  Cras id ullamcorper diam. Nulla nec rhoncus elit.
                </h5>
              </GridItem>
              {/* =============================================================
                    Group leader profile
                  ============================================================= */}
              <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>
                    <img src="https://i.redd.it/6onq25y0sh311.jpg" alt="..." 
                      className={classNames(classes.imgRaised,
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
                  {/* =============================================================
                        Leader contact
                      ============================================================= */}
                  <CardFooter className={classNames(classes.justifyCenter, classes.contactContainer)}>
                    <div>
                      {/* =============================================================
                            Mail information
                          ============================================================= */}
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}>
                          <i className={classes.socials + " fa fa-envelope"} />
                        </Button>
                        <a href="mailto:somemail@gmail.com" className={classNames(classes.primaryColorText, classes.margin5, classes.spanText)}>testmail@gmail.com</a>
                      </div>
                      {/* =============================================================
                            Phone information
                          ============================================================= */}
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5} >
                          <i className={classes.socials + " fa fa-phone"} />
                        </Button>
                        <span className={classNames(classes.margin5, classes.spanText, classes.description)}>+48 123 456 789</span>
                      </div>
                      {/* =============================================================
                            Facebook information
                          ============================================================= */}
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5} >
                          <i className={classes.socials + " fa fa-facebook"} />
                        </Button>
                        <a href="LeaderProfile" className={classNames(classes.margin5, classes.spanText, classes.description)} 
                          style={{ textDecoration: "none" }}>http://facebook.com</a>
                      </div>
                    </div>
                  </CardFooter>
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

export default OazaGroup