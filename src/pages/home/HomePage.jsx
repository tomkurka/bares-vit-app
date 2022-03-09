import React from "react"

import Footer from "../../components/navigation/footer/Footer"
import { useHistory } from "react-router-dom"
import ROUTES from "../../routes/routes"

import personImg from "../../img/person.png"
import aboutImg from "../../img/img9.jpg"
import blogImg from "../../img/img6.jpg"
import exercisesImg from "../../img/img8.jpg"
import dietImg from "../../img/img5.jpg"

import "./homePage.scss"

const HomePage = () => {
  const history = useHistory()

  return (
    <div className="home-page">
      <div className="slides">
        <div className="slide-introduction">
          <div className="content">
            <div className="text-container">
              <h1>Focus.</h1>
              <p>
                <b>Chceš se cítit lépe?</b> Tak to jsi tu správně. Chceš pomoct s{" "}
                <b>přípravou na sezónu v určitém sportu? </b>
                Pak jsi tu také správně. Jsi tu také správně, pokud chceš <b>
                  konečně zhubnout
                </b>{" "}
                nebo <b> konečně nabrat </b> vše <b> udržitelně, bez kravin</b>, extrémních diet a
                extrémních tréninkových plánů. Na míru sestavené služby ti pomohou dosáhnout tvých
                cílů, ať už jsou jakékoli.
              </p>
              <button onClick={() => history.push(ROUTES.DIET.DIET)}>Moje Služby</button>
            </div>
            <div className="img-container">
              <div className="name">Vít</div>
              <div className="surname">Bareš</div>
              <img src={personImg} className="person" alt="person" />
            </div>
          </div>
        </div>
        <div className="slide">
          <h2 className="text-outline">Let's make a change</h2>
        </div>
        <div className="slide-links">
          <div className="links">
            <div
              className="link-container"
              onClick={() => history.push(ROUTES.DIET.DIET)}
              style={{ backgroundImage: `url("${dietImg}")` }}
            >
              <div className="link-layer">Služby na míru</div>
            </div>
            <div
              className="link-container"
              onClick={() => history.push(ROUTES.BLOG.BLOG)}
              style={{ backgroundImage: `url("${blogImg}")` }}
            >
              <div className="link-layer">Blog</div>
            </div>
            <div
              className="link-container"
              onClick={() => history.push(ROUTES.QANDA.QANDA)}
              style={{ backgroundImage: `url("${exercisesImg}")` }}
            >
              <div className="link-layer">Q&A</div>
            </div>
            <div
              className="link-container"
              onClick={() => history.push(ROUTES.ABOUT.ABOUT)}
              style={{ backgroundImage: `url("${aboutImg}")` }}
            >
              <div className="link-layer">O mně</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage
