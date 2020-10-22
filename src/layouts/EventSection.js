import React from "react"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"

// core components
import GridContainer from "../components/Grid/GridContainer.js"
import GridItem from "../components/Grid/GridItem.js"
import Card from "../components/Card/Card.js"
import CardBody from "../components/Card/CardBody.js"

import styles from "../assets/jss/material-kit-react/views/landingPageSections/productStyle.js"
import imagesStyles from "../assets/jss/material-kit-react/imagesStyles.js"

import { cardTitle } from "../assets/jss/material-kit-react.js"
import moment from "moment"

const style = {
  ...imagesStyles,
  cardTitle,
  ...styles,
}

const useStyles = makeStyles(style)

export default function EventSection(props) {
  const classes = useStyles()
  var { events } = props
  var cards = []
  const length = events.length
  events.forEach((event, index) => {
    cards.push(
      <GridItem key={index} xs={12} sm={12} md={4}>
        <Card>
          <img
            style={{
              height: "225px",
              width: "100%",
              display: "block",
              objectFit: "cover",
            }}
            className={classes.imgCardTop}
            src={event.image}
            alt="Card-img-cap"
          />
          <CardBody style={{ minHeight: "225px" }}>
            <h5 className={classes.cardTitle}>{event.name}</h5>
            <p>{moment(event.date).format("DD/MM/YYYY")}</p>
            <p>{moment(event.date).format("h:mm:ss a")}</p>
          </CardBody>
        </Card>
      </GridItem>
    )
  })
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>{props.title}</h2>
          <h5 className={classes.description}>{props.description}</h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer
          style={{
            display: "flex",
            justifyContent: length < 3 ? "center" : "flex-start",
          }}
        >
          {cards}
        </GridContainer>
      </div>
    </div>
  )
}
