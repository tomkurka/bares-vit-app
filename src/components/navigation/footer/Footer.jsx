import React from "react"
import { useHistory } from "react-router-dom"
import INFORMATION_DATA from "../../../data/informationData"
import {
  ICONInstagramOutline,
  // ICONSpotifyOutline,
  ICONMailOutline,
  ICONPhoneOutline,
} from "../../../icons/icons"
import ROUTES from "../../../routes/routes"
import img from "../../../img/footerComponent.jpg"

import "./footer.scss"

const Footer = () => {
  const history = useHistory()
  return (
    <footer style={{ backgroundImage: `url("${img}")` }}>
      <div className="dark-layer">
        <div className="link-icons">
          {/* <a href={INFORMATION_DATA.spotifyLink} target="_blank" rel="noreferrer">
            <ICONSpotifyOutline className="link-icon" />
          </a> */}
          <a href={INFORMATION_DATA.instagramLink} target="_blank" rel="noreferrer">
            <ICONInstagramOutline className="link-icon" />
          </a>
          <a href={INFORMATION_DATA.emailLinkFull}>
            <ICONMailOutline className="link-icon" />
          </a>
          <a href={INFORMATION_DATA.phoneLinkFull}>
            <ICONPhoneOutline className="link-icon" />
          </a>
        </div>

        <div className="pointer" onClick={() => history.push(ROUTES.CONDITIONS.OF_USE)}>
          Podmínky užití a ochrana osobních údajů.
        </div>
        <div className="pointer" onClick={() => history.push(ROUTES.CONDITIONS.BUSINESS)}>
          Obchodní podmínky a ochrana osobních údajů.
        </div>
        <div className="copyright">Created by Tomáš Kůrka 2022. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
