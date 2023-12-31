//Menypage
//import
import MenuComponent from "../components/FetchData";
import Header from "../components/Header";
import Footer from "../components/Footer";
//COmponent including other components
const MenuPage = () => {
  return (
    <div>
      <Header />
      <MenuComponent />
      <Footer />
    </div>
  );
};

export default MenuPage;
