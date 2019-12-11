// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames";

import React from "react"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"
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

const Sakramenty = () => {
    const classes = useStyles();

    const data = useStaticQuery(graphql`
    query getSakramentyPhotos {
        allFile(filter: {relativePath: {regex: "/^Sakramenty/"}}) {
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

    const communionPic = _.select(data.allFile.edges, (node) => {
        return node.node.name === "holy-communion"
    })

    const confessionaryPic = _.select(data.allFile.edges, (node) => {
        return node.node.name === "confessionary"
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

            <div className={classNames(classes.main, classes.mainRaised, "main-card-margin")}>

                <div className={classes.container}>
                    <div className={classes.normalPageTitleContainer}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12} >
                                <h2 className={classNames(classes.title, classes.grayText)}>Sakramenty</h2>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>


                <div className={classes.container}>
                    <div className={classes.section}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <Card>
                                    <Img
                                        style={{ height: "225px", width: "100%", display: "block", objectFit: "cover" }}
                                        className={classes.imgCardTop}
                                        fluid={confessionaryPic[0].node.childImageSharp.fluid}
                                        alt={confessionaryPic[0].node.name}
                                    />
                                    <CardBody>
                                        <h5 className={classNames(classes.description)}>
                                            Do spowiedzi można przystąpić na dwa sposoby:
                                            <br />
                                            <br />
                                            1. Umówić się z duszpasterzem na spowiedź pisząc na fanpage duszpasterstwa lub bezpośrednio do księdza duszpasterza.
                                            <br />
                                            2. Przyjść do kaplicy DA5 przed różańcem od godz. 18.00.*
                                            <br />
                                            Ponadto sakrament pokuty jest sprawowany w każdą niedzielę podczas mszy akademickiej.
                                            <br />
                                            <br />
                                            W przypadku nieobecności kapłana w konfesjonale przed różańcem, prosimy o telefon.
                                            <br />
                                            Numery do naszych księży podane są w zakładce „Kontakt”.
                                        </h5>
                                    </CardBody>
                                </Card>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>

                                <Card>
                                    <Img
                                        style={{ height: "225px", width: "100%", display: "block", objectFit: "cover" }}
                                        className={classes.imgCardTop}
                                        alt={communionPic[0].node.name}
                                        fluid={communionPic[0].node.childImageSharp.fluid}
                                    />
                                    <CardBody>
                                        <h5 className={classNames(classes.description)}>
                                            Msza św. jest sprawowana codziennie w godzinach podanych w planie tygodniowym duszpasterstwa.
                                        <br />
                                            <br />
                                            Jeśli masz specjalną intencję, w której chcesz, by była sprawowana msza, napisz do duszpasterza lub powiedz z przynajmniej trzydniowym wyprzedzeniem.
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
