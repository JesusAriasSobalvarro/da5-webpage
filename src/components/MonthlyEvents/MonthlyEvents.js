import React, { useContext, useEffect, useState } from "react"
import _ from "underscore"
import "../../assets/css/custom-style.css"

import "firebase/firestore"
import { FirebaseContext } from "./../../utils/firebase"
import GridItem from "./../Grid/GridItem"

export default function MonthlyEvents() {
  const firebase = useContext(FirebaseContext)
  const [eventsToDisplay, setList] = useState(null)
  const ref = firebase.firestore().collection(`monthlyPlan`)
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
            let monthlyEvents = _.chain(events)
              .map(x => {
                return {
                  url: x.url,
                }
              })
              .value()

            _.each(monthlyEvents, event => {
              data.push(
                <>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      src={event.url}
                      sstyle={{
                        width: "100%",
                        display: "block",
                        objectFit: "cover",
                        borderRadius: "3px",
                      }}
                      alt=""
                    />
                  </GridItem>
                </>
              )
            })
          })
          setList(list => data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return <>{eventsToDisplay}</>
}
