// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames";

import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby";
import _ from "underscore";

// Components used in this layout -----------------------------------------
import Header from "../components/Header/Header"
import HeaderLinks from "../components/Header/HeaderLinks"
import GridContainer from "../components/Grid/GridContainer"
import GridItem from "../components/Grid/GridItem"
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardFooter from "../components/Card/CardFooter";
import Button from "../components/CustomButtons/Button";
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

const Galeria = () => {
    const classes = useStyles();


    const query = useStaticQuery(graphql`
        query getGaleriaFolders {
                allFile(filter: { sourceInstanceName: { eq: "galeria" } }) {
                    distinct(field: relativeDirectory)
                    edges {
                        node {
                            relativePath
                        }
                    }
                }
        }`)




    var folders = new Set();

    if (query && query.allFile && query.allFile.distinct) {
        query.allFile.distinct.forEach((folder) => {
            var splitArray = folder.split("/");
            if (splitArray.length == 2) {
                folders.add(splitArray[0]);
            }
        })
    }

    if (query && query.allFile && query.allFile.edges) {
        var flattenedNodes = new Array();

        _.each(query.allFile.edges, (item) => {
            flattenedNodes.push(item.node);
        })

        var mapFolderAndYear = _.map(flattenedNodes, (node) => {
            var relativePathSplit = node.relativePath.split("/");
            if (relativePathSplit.length == 3) {
                return {
                    relativePath: node.relativePath,
                    year: relativePathSplit[0],
                    folder: relativePathSplit[1]
                }
            } else
                return {
                    relativePath: node.relativePath,
                    year: "",
                    folder: ""
                }
        })

        var galleryData = _.map(_.groupBy(mapFolderAndYear, 'year'), (value, key) => ({ [key]: _.groupBy(value, 'folder') }));

        var gallery = new Array();

        _.each(galleryData, (yearFolder, key) => {
            var galleryCards = new Array();
            _.each(yearFolder, (eventsInYear, yearKey) => {
                _.each(eventsInYear, (event, key) => {
                    galleryCards.push(
                        <GridItem key={key} xs={12} sm={12} md={4}>
                            <Card>
                                <img
                                    style={{ height: "225px", width: "100%", display: "block", objectFit: "cover" }}
                                    className={classes.imgCardTop}
                                    src={require("../images/galeria/" + event[0].relativePath)}
                                    alt="Card-img-cap"
                                />
                                <CardBody>
                                    <p>{key}</p>
                                </CardBody>
                            </Card>
                        </GridItem>
                    )
                })
                gallery.push(
                    <>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={8}>
                                <h2 className={classes.title}>{yearKey}</h2>
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            {galleryCards}
                        </GridContainer>
                    </>
                )

            })
        })
    }

    // folders.forEach((folder, index) => {
    //     yearDivs.push(
    //         <GridContainer key={index}>
    //         <GridItem xs={12} sm={12} md={12} >
    //             <h2 className={classNames(classes.title, classes.grayText) 
    //             }>{folder}</h2>
    //         </GridItem>
    //     </GridContainer>
    //     )
    // })



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
                        {gallery}
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Galeria
