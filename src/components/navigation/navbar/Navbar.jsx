import React from "react"
import { withRouter } from "react-router-dom"
import {
  ICONActivityBold,
  ICONActivityOutline,
  ICONHomeBold,
  ICONHomeOutline,
  ICONMenuBoardBold,
  ICONMenuBoardOutline,
  ICONNoteBold,
  ICONNoteOutline,
  ICONUserBold,
  ICONUserOutline,
  ICONLogo,
} from "../../../icons/icons"
import ROUTES from "../../../routes/routes"

import "./navbar.scss"

const Navbar = ({ history, location }) => {
  const path = location.pathname

  return (
    <div className="nav">
      <div className="nav-desktop">
        <div className="content">
          <div className="name" onClick={() => history.push(ROUTES.HOME.HOME)}>
            <ICONLogo className="logo" /> Bareš Vít
          </div>
          <div className="links">
            <div
              onClick={() => history.push(ROUTES.HOME.HOME)}
              className={`link ${path === ROUTES.HOME.INITIAL ? "active" : ""}`}
            >
              Úvod
            </div>
            <div
              className={`link ${path.includes(ROUTES.DIET.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(ROUTES.DIET.DIET)}
            >
              Moje služby
            </div>
            <div
              className={`link ${path.includes(ROUTES.BLOG.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(ROUTES.BLOG.BLOG)}
            >
              Blog
            </div>
            <div
              className={`link ${path.includes(ROUTES.QANDA.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(ROUTES.QANDA.QANDA)}
            >
              Q&A
            </div>
            <div
              className={`link ${path.includes(ROUTES.ABOUT.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(ROUTES.ABOUT.ABOUT)}
            >
              O mně
            </div>
            <div
              className={`link ${path.includes(ROUTES.CONTACT.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(ROUTES.CONTACT.CONTACT)}
            >
              Kontakt
            </div>
          </div>
        </div>
      </div>
      <div className="nav-mobile">
        <div className="top">
          <div className="name-container" onClick={() => history.push(ROUTES.HOME.HOME)}>
            <ICONLogo className="logo" /> <div className="name">Bareš Vít</div>
          </div>
          <div className="link" onClick={() => history.push(ROUTES.CONTACT.CONTACT)}>
            Kontakt
          </div>
        </div>
        <div className="bottom">
          <div className="links">
            <div
              className={`link ${path === ROUTES.HOME.INITIAL ? "active" : ""}`}
              onClick={() => history.push(ROUTES.HOME.HOME)}
            >
              {path === ROUTES.HOME.INITIAL ? (
                <ICONHomeBold className="link-icon" />
              ) : (
                <ICONHomeOutline className="link-icon" />
              )}
              <span className="link-name">Úvod</span>
            </div>
            <div
              className={`link ${path.includes(ROUTES.DIET.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(ROUTES.DIET.DIET)}
            >
              {path.includes(ROUTES.DIET.INITIAL) ? (
                <ICONMenuBoardBold className="link-icon" />
              ) : (
                <ICONMenuBoardOutline className="link-icon" />
              )}
              <span className="link-name">Služby</span>
            </div>
            <div
              className={`link ${path.includes(ROUTES.BLOG.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(ROUTES.BLOG.BLOG)}
            >
              {path.includes(ROUTES.BLOG.INITIAL) ? (
                <ICONNoteBold className="link-icon" />
              ) : (
                <ICONNoteOutline className="link-icon" />
              )}
              <span className="link-name">Blog</span>
            </div>
            <div
              className={`link ${path.includes(ROUTES.QANDA.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(ROUTES.QANDA.QANDA)}
            >
              {path.includes(ROUTES.QANDA.INITIAL) ? (
                <ICONActivityBold className="link-icon" />
              ) : (
                <ICONActivityOutline className="link-icon" />
              )}
              <span className="link-name">Q&A</span>
            </div>
            <div
              className={`link ${path.includes(ROUTES.ABOUT.INITIAL) ? "active" : ""}`}
              onClick={() => history.push(ROUTES.ABOUT.ABOUT)}
            >
              {path.includes(ROUTES.ABOUT.INITIAL) ? (
                <ICONUserBold className="link-icon" />
              ) : (
                <ICONUserOutline className="link-icon" />
              )}
              <span className="link-name">O mně</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Navbar)
