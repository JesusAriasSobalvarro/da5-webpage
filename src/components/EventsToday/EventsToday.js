import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import _ from "underscore"
import "../../assets/css/custom-style.css"
import Card from "../Card/Card.js"
import CardBody from "../Card/CardBody.js"
import CardHeader from "../Card/CardHeader.js"
import moment from "moment"
import { FirebaseContext } from "./../../utils/firebase"
import "firebase/firestore"

export default function EventsToday() {
  const firebase = useContext(FirebaseContext)
  const [eventsToDisplay, setList] = useState(null)
  const ref = firebase.firestore().collection(`weeklyPlan`)
  const data = []

  useEffect(() => {
    ref
      .get()
      .then(snapshot => {
        if (!snapshot) {
          setList(list => [])
        } else {
          let events = []
          snapshot.forEach(x => {
            events.push({ ...x.data() })
          })

          var today = getDayOfTheWeek()
          let eventsFiltered = _.chain(events)
            .map(x => {
              return {
                hour: x.hour,
                name: x.name,
                day: capitalize(x.day),
              }
            })
            .sortBy(x => {
              return x.hour
            })
            .filter(x => {
              return x.day == today
            })
            .value()

          _.each(eventsFiltered, event => {
            data.push(
              <div key={"EventToday-" + event.name}>
                <span style={{ fontWeight: "bold" }}>{event.hour}</span>
                <span> - </span>
                <span>{event.name}</span>
              </div>
            )
          })

          setList(list => data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Card>
      <CardHeader color="danger" style={{ textAlign: "center" }}>
        Dziś w duszpasterstwie
      </CardHeader>
      <CardBody style={{ display: "flex", flexDirection: "column" }}>
        {eventsToDisplay}
        <br />
        <hr />
        <Link to="/plantygodnia" style={{ alignSelf: "center" }}>
          Zobacz plan tygodniowy
        </Link>
      </CardBody>
    </Card>
  )
}

function getDayOfTheWeek() {
  var day = ""
  switch (moment().day()) {
    case 1:
      day = "Poniedziałek"
      break
    case 2:
      day = "Wtorek"
      break
    case 3:
      day = "Środa"
      break
    case 4:
      day = "Czwartek"
      break
    case 5:
      day = "Piątek"
      break
    case 6:
      day = "Sobota"
      break
    default:
      day = "Niedziela"
  }
  return day
}

const capitalize = s => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}
