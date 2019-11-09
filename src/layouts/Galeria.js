// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames";

import React, { Component } from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql, Link, StaticQuery } from "gatsby";
import _ from "underscore";
import Img from "gatsby-image"

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
import { ReactBnbGallery } from 'react-bnb-gallery';

// Styles -----------------------------------------------------------------
import styles from "../assets/jss/material-kit-react/views/landingPage.js";
import teamStyles from "../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import customStyles from "./CustomClasses.js";
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css";
import "../assets/css/bnb-gallery-style.css"
import { withStyles } from "@material-ui/styles";

const allStyles = {
    ...styles,
    ...customStyles,
    ...teamStyles
}



class Galeria extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openModal : false,
            photos: []
        }
    }

    // query = useStaticQuery(graphql`
    // query getGaleriaFolders {
    //         allFile(filter: { sourceInstanceName: { eq: "galeria" } }) {
    //             distinct(field: relativeDirectory)
    //             edges {
    //                 node {
    //                     relativePath
    //                 }
    //             }
    //         }
    // }`)

    // if (query && query.allFile && query.allFile.edges) {
    //     var flattenedNodes = new Array();

    //     _.each(query.allFile.edges, (item) => {
    //         flattenedNodes.push(item.node);
    //     })

    //     var mapFolderAndYear = _.map(flattenedNodes, (node) => {
    //         var relativePathSplit = node.relativePath.split("/");
    //         if (relativePathSplit.length == 3) {
    //             return {
    //                 relativePath: node.relativePath,
    //                 year: relativePathSplit[0],
    //                 folder: relativePathSplit[1]
    //             }
    //         } else
    //             return {
    //                 relativePath: node.relativePath,
    //                 year: "",
    //                 folder: ""
    //             }
    //     })

    //     var galleryData = _.map(_.groupBy(mapFolderAndYear, 'year'), (value, key) => ({ [key]: _.groupBy(value, 'folder') }));

    //     var gallery = new Array();

    //     _.each(galleryData, (yearFolder, key) => {
    //         var galleryCards = new Array();
    //         _.each(yearFolder, (eventsInYear, yearKey) => {
    //             _.each(eventsInYear, (event, key) => {
    //                 galleryCards.push(
    //                     <GridItem key={key} xs={12} sm={12} md={4}>
    //                         <Link to={yearKey + "/" + key} style={{}}>
    //                             <Card>
    //                                 <img
    //                                     style={{ height: "225px", width: "100%", display: "block", objectFit: "cover" }}
    //                                     className={classes.imgCardTop}
    //                                     src={require("../images/galeria/" + event[0].relativePath)}
    //                                     alt="Card-img-cap"
    //                                 />
    //                                 <CardBody>
    //                                     <p className={classes.grayText}>{key}</p>
    //                                 </CardBody>
    //                             </Card>
    //                         </Link>
    //                     </GridItem>
    //                 )
    //             })
    //             gallery.push(
    //                 <>
    //                     <GridContainer justify="center">
    //                         <GridItem xs={12} sm={12} md={8}>
    //                             <h2 className={classes.title}>{yearKey}</h2>
    //                         </GridItem>
    //                     </GridContainer>
    //                     <GridContainer>
    //                         {galleryCards}
    //                     </GridContainer>
    //                 </>
    //             )

    //         })
    //     })
    // }








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

    cardClicked = (event, photos, folder) => {
        console.log(photos[folder])
        var pics = new Array();
        var pic;

        photos[folder].forEach(element => {
            pic = require("../images/galeria/"+element.relativePath)
            pics.push(pic)
        });

        this.setState({
            openModal : true,
            photos : pics
        })
    }

    closeModal = () => {
        this.setState({
            openModal: false
        })
    }

    render() {
        const { classes } = this.props;
        // const folders = new Set();
        








        return (
            <>
                <Header
                    color="primary"
                    routes={[]}
                    brand="Duszpasterstwo Akademickie Piątka"
                    rightLinks={<HeaderLinks />}
                    fixed
                />

<ReactBnbGallery
          show={this.state.openModal}
          photos={this.state.photos}
          onClose={this.closeModal}
          showThumbnails={true}
        />

                <div className={classNames(classes.main, classes.mainRaised, "main-card-margin")}>

                    <div className={classes.container}>
                        <div className={classes.normalPageTitleContainer}>
                            <StaticQuery
                                query={graphql`
                                    query getGaleriaFolders {
                                            allFile(filter: { sourceInstanceName: { eq: "galeria" } }) {
                                                distinct(field: relativeDirectory)
                                                edges {
                                                    node {
                                                        name
                                                        relativePath
                                                        childImageSharp {
                                                            fluid(fit: COVER) {
                                                              ...GatsbyImageSharpFluid
                                                            }
                                                          }
                                                    }
                                                }
                                            }
                                    }
                                `}
                                render={data => {
                                    console.log("DATA => ")
                                    console.log(data)
                                    if (data && data.allFile && data.allFile.edges) {
                                        var flattenedNodes = new Array();

                                        _.each(data.allFile.edges, (item) => {
                                            flattenedNodes.push(item.node);
                                        })


                                        var sth = _(flattenedNodes).chain().sortBy(obj => {
                                            return obj.relativePath
                                        }).sortBy(obj => {
                                            return obj.name
                                        }).value()

                                        // console.log("FLATTENED NODES =>")
                                        // console.log(flattenedNodes)

                                        // var sth = _.sortBy(flattenedNodes, (obj) => {
                                        //     return obj.relativePath
                                        // })

                                        console.log(sth)

                                        var mapFolderAndYear = _.map(flattenedNodes, (node) => {
                                            var relativePathSplit = node.relativePath.split("/");
                                            if (relativePathSplit.length == 3) {
                                                return {
                                                    ...node,
                                                    year: relativePathSplit[0],
                                                    folder: relativePathSplit[1]
                                                }
                                            } else
                                                return {
                                                    ...node,
                                                    year: "",
                                                    folder: ""
                                                }
                                        })

                                        var galleryData = _.map(_.groupBy(mapFolderAndYear, 'year'), (value, key) => ({ [key]: _.groupBy(value, 'folder') }));
                                        
                                        var gallery = new Array();

                                        console.log(galleryData)

                                        _.each(galleryData, (yearFolder, key) => {
                                            var galleryCards = new Array();
                                            _.each(yearFolder, (eventsInYear, yearKey) => {
                                                _.each(eventsInYear, (event, key) => {
                                                    galleryCards.push(
                                                        <GridItem key={key} xs={12} sm={12} md={4}>
                                                            <Card onClick={(e) => this.cardClicked(e,_.groupBy(mapFolderAndYear, 'folder'), key)} className={classes.pointerCursor}>
                                                                <Img
                                                                    style={{ height: "225px", width: "100%", display: "block", objectFit: "cover" }}
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
                                                            <GridItem xs={12} sm={12} md={8} className={classes.pointerCursor}>
                                                                <h2 className={classes.title}>{yearKey}</h2>
                                                            </GridItem>
                                                        </GridContainer>
                                                        <GridContainer>
                                                            {galleryCards}
                                                        </GridContainer>
                                                    </div>
                                                )

                                            })
                                        })
                                    }












                                    return (
                                        gallery
                                    )
                                }
                                }
                            />
                        </div>
                    </div>

                </div>

                <Footer />
            </>
        )
    }

}








export default withStyles(allStyles)(Galeria);
