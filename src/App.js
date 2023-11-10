import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import TheGenric from "./components/TheGenric";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <TheGenric />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
