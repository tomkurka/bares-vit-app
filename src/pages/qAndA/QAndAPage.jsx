import React from "react"
import person from "../../img/img8.jpg"

import "./qAndAPage.scss"

const QAndAPage = () => {
  return (
    <div className="q-n-a-page">
      <div className="content">
        <div className="container-img">
          <img src={person} className="person" alt="person" />
          <div className="text">
            <div className="name">Vít Bareš</div>
            <div className="quote">
              "Take care of your body. It’s the only place you have to live in. - Jim Rohn"
            </div>
          </div>
        </div>
        <div className="container-text">
          <h5>Často kladené otázky</h5>
          <div className="block">
            <div className="question">Jakou máš kvalifikaci?</div>
            <div className="answer">
              Dlouhodobý zájem o tuto oblast se těžko dokazuje, „papíry“ jako důkaz si dodělávám.
              Nechci ovšem, aby si někdo myslel, že to znamená, že mám nulové kompetence. Tak to
              rozhodně není. Když zahájíme spolupráci můžete se o to přesvědčit sami.
            </div>
          </div>
          <div className="block">
            <div className="question">
              Už jsem zkoušel zhubnout proč by to zrovna teď mělo vyjít?
            </div>
            <div className="answer">
              Ne každý má na to, ze dne na den udělat všechny potřebné změny a vydržet. Proto je
              nutné budovat jednoduché zvyky, malé krůčky k vítězství. Se kterými vám pomohu, aby
              vše dávalo smysl.
            </div>
          </div>
          <div className="block">
            <div className="question">Pomoc s přípravou však trenéři vědí, co dělají, nebo ne?</div>
            <div className="answer">
              Ano i ne, nechci tímto shazovat vaše trenéry a nechci, aby to znělo, že házím všechny
              do jednoho pytle. Ale spoustu trenérů vlivem nedostatku času, a nebo nezájmu, nevědí,
              jak mají svým svěřencům pomoct co nejlépe, protože nejsou u zdrojů kvalitních a nových
              informací. Společně můžeme zkouknout a optimalizovat vaší tréninkovou přípravu a i
              vaši trenéři třeba ocení, že pro sebe děláte něco navíc a otevíráte se novým věcem.
            </div>
          </div>
          <div className="block">
            <div className="question">Potřebuji trenéra?</div>
            <div className="answer">
              Mít vlastního trenéra má několik benefitů, kontrola správné techniky, motivace začít
              nebo naopak nepřestat, sestavení tréninkových plánů dle potřeb atd. Nejlepší variantou
              je mít vlastního trenéra od začátku, jelikož vás nenechá tápat s nepřeberném množství
              informací, ale ihned vám nastaví účinný plán.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QAndAPage
