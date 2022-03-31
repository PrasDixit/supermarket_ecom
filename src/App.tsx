import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/NavBar/Header";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Offers from "./Pages/Offers/Offers";
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
            <Route path="/Offers" element={<Offers />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
