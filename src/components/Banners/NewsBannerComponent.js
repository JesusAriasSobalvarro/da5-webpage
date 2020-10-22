import React from "react"
import NewsBanner from "../../images/SVGs/Home/news_banner.svg"
import NewsBannerMobile from "../../images/SVGs/Home/news_banner_mobile.svg"

const NewsBannerComponent = ({ isMobile }) => {
    return (
        <>
            {isMobile
                ? <NewsBannerMobile />
                : <NewsBanner />
            }
        </>
    )
}

export default NewsBannerComponent