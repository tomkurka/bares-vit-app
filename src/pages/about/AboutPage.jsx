import React from "react"
import { useHistory } from "react-router-dom"
import ROUTES from "../../routes/routes"
import img from "../../img/aboutPage.jpg"

import "./aboutPage.scss"

const AboutPage = () => {
  const history = useHistory()

  return (
    <div className="about-page">
      <div className="content">
        <div className="container-img">
          <img src={img} className="person" alt="vit bares" />
          <div className="text">
            <div className="name">Vít Bareš</div>
            <div className="quote">
              "Take care of your body. It’s the only place you have to live in. - Jim Rohn"
            </div>
          </div>
        </div>
        <div className="container-text">
          <div className="text">
            <h4>Respekt.</h4>
            <h5>Respekt všem, kteří chtějí změnu a chtějí se stát lepšími.</h5>
            <p>
              Jmenuji se Bareš Vít. Chci pomáhat lidem k <b> lepšímu životu</b> a lepším výsledkům.
              K plnohodnotnějšímu životu. <b>Pohyb je jedna z možností</b>, jak toho dosáhnout,
              rozhodně ale <b>není jediná.</b>. Proto je v rámci mých služeb zahrnuto daleko víc,
              abych vám mohl předat co nejvíce.
            </p>
            <p>
              V tomto oboru se stále vzdělávám, <b>to ale nic nemění na kvalitě služeb</b>, ale
              <b> naopak na jejich cenně </b>. Jelikož pro mě v současné době je brand building a
              maximum praxe s klienty daleko důležitější než výdělek, beru si za svoje služby nutné
              minimum, k vyfiltrování vážných zájemců od ostatních. Připravte se proto za své peníze
              dostat maximum.
            </p>
            <p>
              Pokud stojíte o mé služby neváhejte a obraťte se na mě. Nebo vyplňte{" "}
              <b className="pointer" onClick={() => history.push(ROUTES.DIET.DIET)}>
                {" "}
                krátký dotazník{" "}
              </b>{" "}
              zde na stránkách pro odstartování naší spolupráce.
            </p>
            <p>
              Lidské tělo je neuvěřitelně komplexní, a proto vám nejspíš nebudu schopen pomoct se
              všemi problémy, ovšem kvalitní pohyb, strava, správná regenerace a péče o své mentální
              zdraví, dělají více než si spoustu lidí uvědomuje. Jsou to základy, na kterých jde
              vystavět spoustu dalšího. A nejen to, tyto základy vám také pomohou se lépe cítit
              nejen fyzicky, ale hlavně psychicky. Proto pokud potřebujete pomoct se začátkem a
              nevíte kam se obrátit jsem zde pro Vás.
            </p>
            <p>
              Pokud již zvládáte většinu základů a chcete vyzkoušet nové věci, nebo například pomoct
              s přípravou v určitém sportu. Abyste vždy byli o krok napřed, před vašimi protivníky,
              můžeme společně optimalizovat vaši přípravu pro vaše maximální úspěchy.
            </p>
            <p>
              Pokud jsem vás oslovil, a nechce se vám vyhazovat spoustu peněz za trenéry, kteří se
              ohání pětihodinovou licencí, nebo celodenním kurzem. Zkuste něco jiného. Důležité je
              také zmínit, že závodní úspěchy nemusí nutně znamenat hlubší porozumění funkcí
              lidského těla, a proto se nenechte nachytat od lidí s výsledky bez znalosti práce s
              klienty.
            </p>
            <p>
              <b> Děkuji za vaši důvěru. </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
