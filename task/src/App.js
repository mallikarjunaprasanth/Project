import Developer from "./Components/Developer";
import FooterFinal from "./Components/FooterFinal";
import FooterOne from "./Components/FooterOne";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import NavPhoto from "./Components/NavPhoto";
import Products from "./Components/Products";
import Protofolis from "./Components/Protofolis";
import Services from "./Components/Services";


function App() {
  return (
    <div>
     
     <Header/>
     <Navbar />
      <NavPhoto/>
     <Products/>
     <Services/>
     <Protofolis/>
     <Developer/>
     <FooterOne/>
     <FooterFinal/>

     </div>
   
  );
}

export default App;
