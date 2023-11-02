import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Products from "./pages/products/Products"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Footer from "./components/Footer"

function App() {

  return (

    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
