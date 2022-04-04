import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/NavBar/Header";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Signatures from "./Pages/Signatures/Signatures";
import ForgotPassword from "./Component/ForgotPassword/ForgotPassword";
import Profile from "./Pages/Profile/Profile";
import FAQ from "./Pages/FAQ/FAQ";
import Products from "./Pages/Products/Products";
import Snacks from "./Pages/Products/Snacks";
import DalleMomos from "./Pages/Products/DalleMomos";
import RiceandNoodles from "./Pages/Products/RiceandNoodles";
import FrozenItems from "./Pages/Products/FrozenItems";
import Footer from "./Component/Footer/Footer";
import Error from "./Pages/Error";

function App() {
  return (
    <>
      <div className="content">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/snacks" element={<Snacks />} />
            <Route path="/dallemomos" element={<DalleMomos />} />
            <Route path="/momo" element={<DalleMomos />} />
            <Route path="/riceandnoodles" element={<RiceandNoodles />} />
            <Route path="/frozenitems" element={<FrozenItems />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/signatures" element={<Signatures />} />
            <Route path="/signature" element={<Signatures />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
