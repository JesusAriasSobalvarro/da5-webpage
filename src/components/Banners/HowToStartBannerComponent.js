import React from "react"
import HowToStartBanner from "../../images/SVGs/Home/how_to_start_banner.svg"
import HowToStartBannerMobile from "../../images/SVGs/Home/how_to_start_mobile_banner.svg"

const HowToStartBannerComponent = ({ isMobile }) => {
    return (
        <>
            {isMobile
                ? <HowToStartBannerMobile />
                : <HowToStartBanner />
            }
        </>
    )
}

export default HowToStartBannerComponent;