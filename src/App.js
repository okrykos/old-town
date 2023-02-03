import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import Drinks from "./components/pages/Drinks";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import AdminDrinks from "./components/pages/AdminDrinks";
import AdminMenu from "./components/pages/AdminMenu";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/drinks" exact element={<Drinks />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/admin/drinks" exact element={<AdminDrinks />} />
          <Route path="/admin/menu" exact element={<AdminMenu />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
