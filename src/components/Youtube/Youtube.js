import React from "react"
import PropTypes from "prop-types"
import "../../assets/css/youtube.css"

const Youtube = ({ id }) => {
    return (
        <div className="youtube">
            <iframe
                title={id}
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            >   
            </iframe>
        </div>
    )
}

Youtube.propTypes = {
    id: PropTypes.string.isRequired
}

export default Youtube