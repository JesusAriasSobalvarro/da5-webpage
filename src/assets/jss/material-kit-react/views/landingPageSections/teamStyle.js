import { cardTitle, title } from "../../../material-kit-react.js"; 
import imagesStyle from "../../imagesStyles" 

const teamStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  ...imagesStyle,
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  boldText: {
    marginBottom: '3px',
    fontWeight: 'bold',
    fontSize: '17px',
    fontFamily:'Segoe UI',
    color: '#333333'
  },
  lightText: {
      marginBottom: '3px',
      color:'#8a919a',
      fontFamily:'Segoe UI'
  }
};

export default teamStyle;
