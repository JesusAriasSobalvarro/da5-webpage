import React, { useContext, useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../Grid/GridItem"
import Card from "../Card/Card"
import CardBody from "../Card/CardBody"
import { cardTitle } from "../../assets/jss/material-kit-react.js"
import _ from "underscore"
import { FirebaseContext } from "./../../utils/firebase"
import styles from "../../assets/jss/material-kit-react/views/landingPage.js";

const allStyles = {
    ...styles,
    cardTitle
  }

  const useStyles = makeStyles(allStyles);

export default function News(props) {
    const classes = useStyles();

console.log("NEWS")
console.log(FirebaseContext)
    const firebase = useContext(FirebaseContext)
    const [homeEvents, setList] = useState(null)
    const ref = firebase.firestore().collection(`news`)
    const data = [];

    useEffect(() => {
        ref.get().then(snapshot => {
          if (!snapshot) {
            setList(list => [])
          } else {
            let homeNews = []
            snapshot.forEach(x => {
    
              homeNews.push({ ...x.data() })
            })
    
            // var today = getDayOfTheWeek();
            let newsList = _.chain(homeNews)
              .map(x => {
                return {
                  description: x.description,
                  title: x.title,
                  url: x.url
                }
              })
            //   .sortBy(x => {
            //     return x.hour
            //   })
            //   .filter(x => {
            //     return x.day == today
            //   })
              .value()
    
            _.each(newsList, news => {
              data.push(
                  <>
                {/* // <div>
                //   <span style={{ fontWeight: "bold" }}>{event.hour}</span>
                //   <span> - </span>
                //   <span>{event.name}</span>
                // </div> */}

                <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }} key={news.title}>
                <Card>
                <img src={news.url} style={{ height: "225px", width: "100%" }} alt="" className={classes.imgCardTop} 
                   
                  />

                
          
                  <CardBody style={{ minHeight: "225px" }}>
                    <h5 className={classes.cardTitle}>{news.title}</h5>
                    <p style={{ lineHeight: "2" }}>{splitDescription(news.description)}</p>
                  </CardBody>
                  <CardBody style={{ textAlign:"right"}}>
                  <p style={{ margin:"0",display:"inline-block", cursor:"pointer"}} onClick={() => props.openModal(true, news.url, news.title, news.description)} >Więcej</p>
                  </CardBody>
                </Card>
              </GridItem>
              </>

              )
            })
    
            setList(list => data)
          }
        }).catch(error => {
          console.log(error)
        })
      }, [])

      return (
          <>
          {homeEvents}
          </>
      );
}

const splitDescription = (description) => {
    var splitted = description.split(" ")
    console.log(splitted.length)
    if (splitted.length > 20) {
        var summary = ""
        for (var i = 0; i < 20; i++) {
            summary += splitted[i] + " ";
        }
          summary += "..."
          return summary
    } 

    return description;
}