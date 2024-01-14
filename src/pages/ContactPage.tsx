//page
//Import
import Header from '../components/Header';
import Footer from '../components/Footer';
//Component
const ContactPage = () => {
  return (
    <div >
    <Header />
    <main className='container' >
    <h1 className='text-center'>Kontakta oss</h1>
    <h2 className='h2-contact text-center p-4'>Vill du kontakta oss? <br></br>
      Besök oss fysiskt i vårt café, mejla eller ring</h2>
    <article className='container mx-auto w-100 text-center d-flex flex-row justify-content-between'>

      <div className='text-wrapper mx-auto w-100 d-flex flex-column'>
      <div className='mx-auto p-3'>
      <h3>Besöksadress</h3>
      <p>Cafégatan 1 <br></br>
        803 11 Gävle</p>
        </div>
        <div className='mx-auto p-3'>
          <h3>Skicka ett mejl eller ring</h3>
          <p>026-26 26 00 <br></br>
        <a className="link-light" href="kontakt@coffecakecafe.com">kontakt@coffecakecafe.com</a>
        </p>
        </div>
        </div>
    </article>
    </main>
    <Footer />
    </div>
  )
}

export default ContactPage