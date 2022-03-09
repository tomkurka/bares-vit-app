import React from "react"
import { ICONInstagramOutline, ICONMailOutline, ICONPhoneOutline } from "../../icons/icons"
import INFORMATION_DATA from "../../data/informationData"
import img from "../../img/gAndAPage.jpg"

import "./contactPage.scss"

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="container-img">
          <img src={img} alt="fit man" />
          <div className="text">
            <div className="name">Vít Bareš</div>
            <div className="quote">
              "Take care of your body. It’s the only place you have to live in. - Jim Rohmn"
            </div>
          </div>
        </div>
        <div className="container-text">
          <h5>Jsem tu pro vás</h5>
          <a
            className="link"
            href={INFORMATION_DATA.instagramLink}
            target="_blank"
            rel="noreferrer"
          >
            <ICONInstagramOutline className="contact-icon" />
            <div className="container">
              <div className="label">Instagram</div>
              <div className="name">{INFORMATION_DATA.instagramName}</div>
            </div>
          </a>
          <a className="link" href={INFORMATION_DATA.emailLinkFull}>
            <ICONMailOutline className="contact-icon" />
            <div className="container">
              <div className="label">Email</div>
              <div className="name">{INFORMATION_DATA.emailLink}</div>
            </div>
          </a>
          <a className="link" href={INFORMATION_DATA.phoneLinkFull}>
            <ICONPhoneOutline className="contact-icon" />
            <div className="container">
              <div className="label">Telefon</div>
              <div className="name">{INFORMATION_DATA.phoneLink}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
