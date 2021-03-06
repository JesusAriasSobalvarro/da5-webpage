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
                    Sp??d??my ten czas razem
                  </h6>
                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >
                    Raz w tygodniu, w czwartki, nasza kawiarenka w "Pi??tce" zmienia si?? nie do poznania... To czas przeznaczonych dla pewnych wyj??tkowych Ludzi, kt??rzy od lat w podobny spos??b sp??dzaj?? czwartkowe popo??udnia -
                    <span className={classNames("body-text-highlight ")}>
                      &nbsp;Podopiecznych ??wietlicy dla os??b z niepe??nosprawno??ci?? intelektualn??.&nbsp;
                    </span>
                    Pogodni, roze??miani (czasem nawet ciut zadziorni??? ;) ), ale przede wszystkim spragnieni rozmowy, uwagi i mi??o??ci. Potrafi??cy 
                    <span className={classNames("body-text-highlight ")}>
                      &nbsp;obdarzy?? u??miechem prosto z serca i nauczy?? prostej szczero??ci,&nbsp;
                    </span>
                    kt??rej cz??sto tak bardzo nam brakuje.
                  </p>

                  <p
                    className={classNames(
                      classes.description,
                      classes.grayText,
                      "body-text"
                    )}
                  >                  
                    <span className={classNames("body-text-highlight ")}>
                    Z ??wietliczakami co tydzie?? spotykaj?? si?? studenci &nbsp;
                    </span>
                    - mo??e to propozycja w??a??nie dla Ciebie? Przyjd?? cho??by na sam pocz??tek, u??miechnij si??, spr??buj pozna??, porozmawia??. Mo??e zostaniesz na d??u??ej i b??dziesz chcia?? da?? troch?? z siebie - zaanga??owa?? si?? w zaj??cia dla ??wietliczak??w, przeprowadzi?? quiz, lekcj?? origami, pom??c przy kolacji albo organizacji wycieczki? Ka??de ochocze serce i para r??k s?? na wag?? z??ota.
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
                        Chcesz 
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;da?? z siebie co?? dla innych, &nbsp;
                        </span>
                        po??wi??ci?? troch?? czasu, by dla kogo?? czwartkowe popo??udnie by??o najweselsze w ca??ym tygodniu.
                        
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
                        Nie boisz si?? prze??ama?? swoich opor??w przed osobami z niepe??nosprawno??ci?? intelektualn??, (bo i tak si?? zdarza i to nic z??ego, ale uwierz, naprawd?? 
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;warto pr??bowa?? to zmienia??. &nbsp;
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
                        Pragniesz wyj???? z ???Pi??tki??? ubogacony o 
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;nowe relacje&nbsp;
                        </span>
                        i now?? dawk?? 
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;prostej szczero??ci,&nbsp;
                        </span>
                        a tak??e pog????bi?? swoj??
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;wra??liwo????,&nbsp;
                        </span>
                        zyska?? inne
                        <span className={classNames("body-text-highlight ")}>
                          &nbsp;spojrzenie na ??ycie&nbsp;
                        </span>
                        i nowy pogl??d o osobach z niepe??nosprawno??ciami (czy takich samych ludzi jak my wszyscy! :)).
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
                        Hej! Jestem Ania i na co dzie?? ????cz?? studiowanie matematyki stosowanej z prac?? w dziale finansowym, udzielam si?? w Ruchu ??wiat??o- ??ycie i (wisienka na torcie!) odpowiadam za ??wietlic?? czwartkow?? w DA5. Staram si?? codziennie maksymalizowa?? funkcj?? dobra dawanego ??wiatu 
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
