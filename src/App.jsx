import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Company from "./pages/Company/Company";
import Contact from "./pages/Contact/Contact";
import NewProject from "./pages/Project/Project";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./styles/style.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/newproject" element={<NewProject />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
