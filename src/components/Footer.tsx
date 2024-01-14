
//Footer.jsx
//COmponent
const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto text-center block"> 
      <div className="ohours p-3 mx-auto">
        <p>
          <strong>
            Öppettider <br></br><br></br>
            </strong>
            Mån - fre:  <strong>07.00-18.00<br></br></strong>
            Lör & sön:  <strong>08.00-17.00<br></br></strong>
            </p>
      </div>
      <div className="address p-3 mx-auto">
        <p>
        <strong>CoffeCake Café</strong><br></br><br></br>
        Cafégatan 1 <br></br>
        803 11 Gävle
          </p>
          </div>
          <div className="contact p-3 mx-auto">
        <p>
        <strong>Kontakt </strong><br></br><br></br>
        026-26 26 00 <br></br>
        <a className="link-light" href="kontakt@coffecakecafe.com">kontakt@coffecakecafe.com</a>
          </p>
          </div>
      </footer>
      </div>
  )
}

export default Footer