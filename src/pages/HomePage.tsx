//Home page
//import
import Header from "../components/Header";
import Footer from "../components/Footer";
//Component
const Home = () => {
  return (
    <div>
      <Header />
      <main className="container text-center">
        <h1>Start</h1>
        <article className="container w-75 p-3">
          <h2 className="h2-contact p-3 m-2">
            Välkommen till oss på CoffeCake Café
          </h2>
          <p>CoffeCake Café startades 2022 och ligger mitt i Gävle. </p>
          <p>
            Det viktigaste för oss är våra gäster. Vi strävar alltid efter att
            överträffa våra gästers förväntningar. Hos oss kan du äta och dricka
            gott, i en lugn och harmonisk atmosfär, ett perfekt avbrott i
            vardagen.
          </p>
          <p>
            Hos oss kan du njuta av frukost på vardagar klockan 07.00-10.00. Vi
            erbjuder även enklare lunch.{" "}
          </p>
          <p>
            Är du sugen på gófika? Då har du kommit rätt. Vi har kaffe, te,
            kalla drycker, bakverk, tårta, pajer med mera.
            <br></br>
            <br></br>
            Välkommen in!
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
