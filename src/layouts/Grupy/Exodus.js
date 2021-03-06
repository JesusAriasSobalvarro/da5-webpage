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
import "../../assets/css/exodus-style.css"

const allStyles = {
  ...styles,
  ...customStyles,
  ...teamStyles,
}

const useStyles = makeStyles(allStyles)

const OazaGroup = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query exodusGetPictures {
      allFile(filter: { relativePath: { regex: "/Exodus/" } }) {
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
    return node.node.name === "Banner_01"
  })
  const point1 = _.select(data.allFile.edges, node => {
    return node.node.name === "Points__EXODUS_1"
  })
  const point2 = _.select(data.allFile.edges, node => {
    return node.node.name === "Points__EXODUS_2"
  })
  const point3 = _.select(data.allFile.edges, node => {
    return node.node.name === "Points__EXODUS_3"
  })
  const liderPic = _.select(data.allFile.edges, node => {
    return node.node.name === "Lider_profile"
  })
  const dateBanner = _.select(data.allFile.edges, node => {
    return node.node.name === "Date_exodus"
  })
  const stairsLogo = _.select(data.allFile.edges, node => {
    return node.node.name === "Location_exodus_Obszar roboczy 1"
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
                    Czy jeste?? gotowy na wi??cej?
                  </h6>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >
                    Jeste??my grup?? m??odych m????czyzn,
                    <span className={classNames("body-text-orange")}>
                      &nbsp;chc??cych zmienia?? ??wiat na lepsze - oczywi??cie
                      zaczynaj??c od siebie.
                    </span>
                  </p>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >
                    Poprzez
                    <span className={classNames("body-text-orange")}>
                      &nbsp;modlitw??, ascez?? i braterstwo,&nbsp;
                    </span>
                    kt??re poza co tygodniowymi spotkaniami obejmuj?? tak??e wiele
                    ciekawych wypad??w, staramy si?? pog????bia?? relacj?? z Ojcem.
                    B??g jest dla nas kim?? ??ywym i prawdziwym i cho?? brzmi to
                    do???? ko??cio??kowo jeste??my grup?? zwyk??ych ch??opak??w, kt??rzy
                    nierzadko w??a??nie poprzez wsp??ln?? formacj?? zrozumieli, ??e
                    <span className={classNames("body-text-orange")}>
                      &nbsp;relacja z Bogiem polega na czym?? wi??cej ni?? tylko
                      wieczornym pacierzu.&nbsp;
                    </span>
                  </p>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >
                    Oczywi??cie poza modlitw??, rozmow?? i formacj?? cenimy sobie
                    wsp??lne g??rskie wypady czy zwyk??e wyj??cia na bilard.
                  </p>

                  <br></br>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text",
                      "strikearound"
                    )}
                  >
                    {" "}
                    Do????cz do nas, je??li???{" "}
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
                        Poszukujesz wsp??lnoty, kt??ra opr??cz
                        <span className={classNames("body-text-orange")}>
                          &nbsp;modlitwy&nbsp;
                        </span>
                        da Ci tak??e mo??liwo???? nawi??zania
                        <span className={classNames("body-text-orange")}>
                          &nbsp;bli??szych relacji i przyja??ni.&nbsp;
                        </span>
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
                        Chcesz zmienia?? siebie, aby by??
                        <span className={classNames("body-text-orange")}>
                          &nbsp;lepszym dla innych. &nbsp;
                        </span>
                        Potrafisz od siebie wymaga?? i widzisz
                        <span className={classNames("body-text-orange")}>
                          &nbsp;potrzeb?? ci??g??ej zmiany na drodze do prawdziwej
                          m??sko??ci,&nbsp;
                        </span>
                        do kt??rej wzywa nas B??g.
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
                        Chcesz
                        <span className={classNames("body-text-orange")}>
                          &nbsp;zaanga??owa?? si?? w formacj??, &nbsp;
                        </span>
                        a nie tylko przyj???? na spotkanie raz w miesi??cu jako
                        anonimowy go????.
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
                      {console.log("AAAAAAAAA")}
                      {console.log(liderPic[0].node.childImageSharp.fl)}
                      <Img
                        fluid={liderPic[0].node.childImageSharp.fluid}
                        alt="ExodusLeaderPic"
                        className={classNames(
                          classes.imgRaised,
                          classes.imgRoundedCircle,
                          classes.imgFluid
                        )}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      Piotr Pyciak
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
                        Jeden z m??odszych cz??onk??w grupy. Z racji, ??e trzeba tu
                        co?? o sobie napisa?? to wymieni?? swoje zainteresowania:
                        g??rski trekking (nie tylko w Polsce), pielgrzymki oraz
                        dobre memy.
                        <br />
                        <br />
                        Nasze exodusowe has??o to "Wali??! Wali??! Wali??!"
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
                            href="mailto:piotr.pyciak@gmail.com"
                            className={classNames(
                              classes.primaryColorText,
                              classes.margin5,
                              classes.spanText
                            )}
                          >
                            piotr.pyciak@gmail.com
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
                            href="https://www.facebook.com/smiesznypiotrus "
                            className={classNames(
                              classes.margin5,
                              classes.spanText,
                              classes.description
                            )}
                            style={{ textDecoration: "none" }}
                          >
                            smiesznypiotrus
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
                          <span style={{ fontWeight: "normal" }}>20:30</span>
                        </p>

                        <GridItem xs={12} sm={12} md={12}>
                          <div className={classNames("icon-text-container")}>
                            <img
                              alt="Location_Logo"
                              className={classNames("icon")}
                              src={stairsLogo[0].node.publicURL}
                            />

                            <p
                              className={classNames(
                                classes.description,
                                classes.grayText,
                                "body-text"
                              )}
                            >
                              Salka ???Underground???
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
