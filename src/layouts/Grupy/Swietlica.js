// @material-ui/core components -------------------------------------------
import { makeStyles } from "@material-ui/core/styles"

// nodejs library that concatenates classes -------------------------------
import classNames from "classnames"

import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import _ from "underscore"

// Components used in this layout -----------------------------------------
import Header from "../../components/Header/Header"
import HeaderLinks from "../../components/Header/HeaderLinks"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import Card from "../../components/Card/Card"
import CardBody from "../../components/Card/CardBody"
import CardFooter from "../../components/Card/CardFooter"
import Button from "../../components/CustomButtons/Button"
import Footer from "../../components/Footer/Footer.js"

// Styles -----------------------------------------------------------------
import styles from "../../assets/jss/material-kit-react/views/landingPage.js"
import teamStyles from "../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.js"
import customStyles from "../CustomClasses"
import "font-awesome/css/font-awesome.min.css"
import "../../assets/css/custom-style.css"
import "../../assets/css/swietlica-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const OazaGroup = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query swietlicaGetPictures {
      allFile(filter: { relativePath: { regex: "/Swietlica/" } }) {
        edges {
          node {
            name
            publicURL
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
              fluid(fit: COVER, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const groupPic = _.select(data.allFile.edges, node => {
    return node.node.name === "GroupPic"
  })
  const background = _.select(data.backgroundPic.edges, node => {
    return node.node.name === "background"
  })
  const banner = _.select(data.allFile.edges, node => {
    return node.node.name === "Banner_03"
  })
  const point1 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico_-07"
  })
  const point2 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico_-08"
  })
  const point3 = _.select(data.allFile.edges, node => {
    return node.node.name === "ico_-09"
  })
  const liderPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Lider_profile"
  })
  const dateBanner = _.select(data.allFile.edges, node => {
    return node.node.name === "Date_swietlica"
  })
  const localisationLogo = _.select(data.allFile.edges, node => {
    return node.node.name === "Localisation"
  })

  return (
    <>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white",
        }}
      />
      <div className={classNames("mobile-banner")}>
        <Header color="white" routes={[]} rightLinks={<HeaderLinks />} fixed />
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
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <img
          src={banner[0].node.publicURL}
          style={{ width: "100%", height: "auto", marginBottom: "0px" }}
        ></img>
        <div className={classNames("padding-div")}>
          <div className={classes.container}>
            <div className={classes.section}>
              <GridContainer>
                {/* =============================================================
                    Grupy picture and description
                  ============================================================= */}
                <GridItem xs={12} sm={12} md={8}>
                  <Img
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "3px",
                      marginBottom: "10px",
                    }}
                    fluid={groupPic[0].node.childImageSharp.fluid}
                    alt={groupPic[0].node.name}
                  />
                  <h6 className={classNames("quote")}>
                    Spędźmy ten czas razem
                  </h6>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >
                    Raz w tygodniu, w czwartki, nasza kawiarenka w "Piątce" zmienia się nie do poznania... To czas przeznaczonych dla pewnych wyjątkowych Ludzi, którzy od lat w podobny sposób spędzają czwartkowe popołudnia -
                    <span className={classNames("body-text-highlight ")}>
                      &nbsp;Podopiecznych Świetlicy dla osób z niepełnosprawnością intelektualną.&nbsp;
                    </span>
                    Pogodni, roześmiani (czasem nawet ciut zadziorni… ;) ), ale przede wszystkim spragnieni rozmowy, uwagi i miłości. Potrafiący 
                    <span className={classNames("body-text-highlight ")}>
                      &nbsp;obdarzyć uśmiechem prosto z serca i nauczyć prostej szczerości,&nbsp;
                    </span>
                    której często tak bardzo nam brakuje.
                  </p>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >                  
                    <span className={classNames("body-text-highlight ")}>
                    Z Świetliczakami co tydzień spotykają się studenci &nbsp;
                    </span>
                    - może to propozycja właśnie dla Ciebie? Przyjdź choćby na sam początek, uśmiechnij się, spróbuj poznać, porozmawiać. Może zostaniesz na dłużej i będziesz chciał dać trochę z siebie - zaangażować się w zajęcia dla Świetliczaków, przeprowadzić quiz, lekcję origami, pomóc przy kolacji albo organizacji wycieczki? Każde ochocze serce i para rąk są na wagę złota.
                  </p>

                  <br></br>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text",
                      "strikearoundSw"
                    )}
                  >
                    {" "}
                    Dołącz do nas, jeśli…{" "}
                  </p>

                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
                      <img
                        className={classNames("icon")}
                        src={point1[0].node.publicURL}
                      />

                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}
                      >
                        Chcesz 
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;dać z siebie coś dla innych, &nbsp;
                        </span>
                        poświęcić trochę czasu, by dla kogoś czwartkowe popołudnie było najweselsze w całym tygodniu.
                        
                      </p>
                    </div>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
                      <img
                        className={classNames("icon")}
                        src={point2[0].node.publicURL}
                      />

                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}
                      >
                        Nie boisz się przełamać swoich oporów przed osobami z niepełnosprawnością intelektualną, (bo i tak się zdarza i to nic złego, ale uwierz, naprawdę 
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;warto próbować to zmieniać. &nbsp;
                        </span>

                      </p>
                    </div>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                    <div className={classNames("icon-text-container")}>
                      <img
                        className={classNames("icon")}
                        src={point3[0].node.publicURL}
                      />

                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}
                      >
                        Pragniesz wyjść z “Piątki” ubogacony o 
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;nowe relacje&nbsp;
                        </span>
                        i nową dawkę 
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;prostej szczerości,&nbsp;
                        </span>
                        a także pogłębić swoją
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;wrażliwość,&nbsp;
                        </span>
                        zyskać inne
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;spojrzenie na życie&nbsp;
                        </span>
                        i nowy pogląd o osobach z niepełnosprawnościami (czy takich samych ludzi jak my wszyscy! :)).
                      </p>
                    </div>
                  </GridItem>
                </GridItem>
                {/* =============================================================
                    Group leader profile
                  ============================================================= */}
                <GridItem xs={12} sm={12} md={4}>
                  <Card plain>
                    <GridItem xs={6} sm={6} md={6} className={classes.itemGrid}>

                      <Img
                        fluid={liderPic[0].node.childImageSharp.fluid}
                        alt="SwietlicaLeaderPic"
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                        Anna Strojek
                      <br />
                      <small className={classes.smallTitle}>Lider</small>
                    </h4>
                    <CardBody>
                      <p
                        className={classNames(
                          classes.description,
                          classes.grayText,
                          "body-text"
                        )}
                      >
                        Hej! Jestem Ania i na co dzień łączę studiowanie matematyki stosowanej z pracą w dziale finansowym, udzielam się w Ruchu Światło- Życie i (wisienka na torcie!) odpowiadam za Świetlicę czwartkową w DA5. Staram się codziennie maksymalizować funkcję dobra dawanego światu 
                      </p>
                    </CardBody>
                    {/* =============================================================
                        Leader contact
                      ============================================================= */}
                    <CardFooter
                      className={classNames(
                        classes.justifyCenter,
                        classes.contactContainer
                      )}
                    >
                      <div>
                        {/* =============================================================
                            Mail information
                          ============================================================= */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            justIcon
                            color="transparent"
                            className={classes.margin5}
                          >
                            <i
                              className={classes.socials + " fa fa-envelope"}
                            />
                          </Button>
                          <a
                            href="mailto:darstro@wp.pl"
                            className={classNames(
                              classes.primaryColorText,
                              classes.margin5,
                              classes.spanText
                            )}
                          >
                            darstro@wp.pl
                          </a>
                        </div>
                        {/* =============================================================
                            Phone information
                          ============================================================= */}

                        {/* =============================================================
                            Facebook information
                          ============================================================= */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            justIcon
                            color="transparent"
                            className={classes.margin5}
                          >
                            <i
                              className={classes.socials + " fa fa-facebook"}
                            />
                          </Button>
                          <a
                            href="https://www.facebook.com/ankes.es"
                            className={classNames(
                              classes.margin5,
                              classes.spanText,
                              classes.description
                            )}
                            style={{ textDecoration: "none" }}
                          >
                            ankes.es
                          </a>
                        </div>

                        <img
                        src={dateBanner[0].node.publicURL}
                          alt="DateBanner"
                          style={{ paddingTop: "25px" }}
                        />

                        <p
                          className={classNames(
                            classes.description,
                            classes.grayText,
                            "meeting-date"
                          )}
                        >
                          Czwartek
                          <br />
                          <span style={{ fontWeight: "normal" }}>16:00</span>
                        </p>

                        <GridItem xs={12} sm={12} md={12}>
                          <div className={classNames("icon-text-container")}>
                            <img
                              alt="Location_Logo"
                              className={classNames("icon")}
                              src={localisationLogo[0].node.publicURL}
                            />

                            <p
                              className={classNames(
                                classes.description,
                                classes.grayText,
                                "body-text"
                              )}
                            >
                              Salka “Underground”
                            </p>
                          </div>
                        </GridItem>
                      </div>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default OazaGroup
