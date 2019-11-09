// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames";

import React from "react"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby";
import _ from "underscore";
import window from "global"

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
import customStyles from "../layouts/CustomClasses.js";
import "font-awesome/css/font-awesome.min.css"
import "../assets/css/custom-style.css"
import "./style.css"
import "../assets/css/bnb-gallery-style.css"

const allStyles = {
    ...styles,
    ...customStyles,
    ...teamStyles
}

const useStyles = makeStyles(allStyles);

const pic = require("./../images/Galeria/2018-2019/Koledowanie/dsc_0722.jpg");
const pic1 = require("./../images/Galeria/2018-2019/Koledowanie/dsc_0725.jpg");
const photos = [pic,pic1];
// const map = photos.map(x => require(x))

const GaleriaTemplate = () => {
    const classes = useStyles();

console.log(window.location.href)



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
          show={true}
          photos={photos}
        />

            <div className={classNames(classes.main, classes.mainRaised, "main-card-margin")}>

                <div className={classes.container}>
                    <div className={classes.normalPageTitleContainer}>
                        <h1>Im a gallery</h1>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default GaleriaTemplate

