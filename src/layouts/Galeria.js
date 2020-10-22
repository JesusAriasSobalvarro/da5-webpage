// nodejs library that concatenates classes -------------------------------
import classNames from "classnames"

import React from "react"

import { graphql, StaticQuery } from "gatsby"
import _ from "underscore"
import Img from "gatsby-image"

// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Card from "../components/Card/Card"
import CardBody from "../components/Card/CardBody"
import Footer from "../components/Footer/Footer.js"
import { ReactBnbGallery } from "react-bnb-gallery"

// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "./CustomClasses.js"
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css"
import "../assets/css/bnb-gallery-style.css"
import { withStyles } from "@material-ui/styles"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

class Galeria extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: false,
      photos: [],
      background: null,
    }
  }

  /*  ================================================================
            Functions to open and close a modal to display the gallery
        ================================================================ */
  cardClicked = (event, photos, folder) => {
    var pics = []
    var pic

    photos[folder].forEach(element => {
      pic = require("../images/Galeria/" + element.relativePath)
      pics.push(pic)
    })

    this.setState({
      openModal: true,
      photos: pics,
    })
  }

  closeModal = () => {
    this.setState({
      openModal: false,
    })
  }

  render() {
    const { classes } = this.props
    const { background } = this.state

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

        <ReactBnbGallery
          show={this.state.openModal}
          photos={this.state.photos}
          onClose={this.closeModal}
          showThumbnails={true}
        />

        {background && (
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
        )}

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
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/gallery_banner.svg?alt=media&token=39cb7fcd-d3e1-47c9-86c7-8f1c5966a40b"
            className={classNames("normal-banner")}
          />

          <img
            src="https://firebasestorage.googleapis.com/v0/b/da5-webpage.appspot.com/o/gallery_banner_mobile.svg?alt=media&token=713aee2e-7b9b-4036-8b41-b78251b375a4"
            className={classNames("mobile-banner")}
          />

          <div className={classes.container}>
            <div className={classes.normalPageTitleContainer}>
              {/*  ================================================================
                                    Query the galeria folder with its corresponding files and 
                                    dynamically generate data to display a Gallery
                                ================================================================ */}
              <StaticQuery
                query={graphql`
                  query getGaleriaFolders {
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

                    allFile(filter: { sourceInstanceName: { eq: "galeria" } }) {
                      distinct(field: relativeDirectory)
                      edges {
                        node {
                          name
                          relativePath
                          childImageSharp {
                            fluid(fit: COVER, quality: 90) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    }
                  }
                `}
                render={data => {
                  /*  ================================================================
                                            Render method using the data of the query
                                        ================================================================ */
                  if (data && data.allFile && data.allFile.edges) {
                    var flattenedNodes = []

                    _.each(data.allFile.edges, item => {
                      flattenedNodes.push(item.node)
                    })

                    /*  ================================================================
                                                Get the folders by Name and Year and group them by it
                                            ================================================================ */
                    var mapFolderAndYear = _.map(flattenedNodes, node => {
                      var relativePathSplit = node.relativePath.split("/")
                      if (relativePathSplit.length === 3) {
                        return {
                          ...node,
                          year: relativePathSplit[0],
                          folder: relativePathSplit[1],
                        }
                      } else
                        return {
                          ...node,
                          year: "",
                          folder: "",
                        }
                    })

                    var galleryData = _.map(
                      _.groupBy(mapFolderAndYear, "year"),
                      (value, key) => ({ [key]: _.groupBy(value, "folder") })
                    )

                    var gallery = []

                    _.each(galleryData, (yearFolder, key) => {
                      var galleryCards = []
                      _.each(yearFolder, (eventsInYear, yearKey) => {
                        _.each(eventsInYear, (event, key) => {
                          galleryCards.push(
                            /*  ================================================================
                                                                Set the first item of each folder as thumbnail
                                                            ================================================================ */
                            <GridItem key={key} xs={12} sm={12} md={4}>
                              <Card
                                onClick={e =>
                                  this.cardClicked(
                                    e,
                                    _.groupBy(mapFolderAndYear, "folder"),
                                    key
                                  )
                                }
                                className={classes.pointerCursor}
                              >
                                <Img
                                  style={{
                                    height: "225px",
                                    width: "100%",
                                    display: "block",
                                    objectFit: "cover",
                                  }}
                                  className={classes.imgCardTop}
                                  fluid={event[0].childImageSharp.fluid}
                                  alt={event[0].folder + " thumbnail"}
                                />
                                <CardBody>
                                  <p className={classes.grayText}>{key}</p>
                                </CardBody>
                              </Card>
                            </GridItem>
                          )
                        })
                        gallery.push(
                          <div key={yearKey}>
                            <GridContainer justify="center">
                              <GridItem
                                xs={12}
                                sm={12}
                                md={8}
                                className={classes.pointerCursor}
                              >
                                <h2 className={classes.title}>{yearKey}</h2>
                              </GridItem>
                            </GridContainer>
                            <GridContainer>{galleryCards}</GridContainer>
                          </div>
                        )
                      })
                    })
                  }

                  if (this.state.background == null) {
                    this.setState({
                      background: _.select(data.backgroundPic.edges, node => {
                        return node.node.name === "background"
                      }),
                    })
                  }

                  return gallery
                }}
              />
            </div>
          </div>
        </div>

        <Footer />
      </>
    )
  }
}

export default withStyles(allStyles)(Galeria)
