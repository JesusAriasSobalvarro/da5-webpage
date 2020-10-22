import React from "react"
import FollowUsBanner from "../../images/SVGs/Home/follow_us_banner.svg"
import FollowUsBannerMobile from "../../images/SVGs/Home/follow_us_banner_mobile.svg"

const FollowUsBannerComponent = ({ isMobile }) => {
    return (
        <>
            {isMobile
                ? <FollowUsBannerMobile />
                : <FollowUsBanner />
            }
        </>
    )
}

export default FollowUsBannerComponent