import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import Home from "./Components/Home/Home";
import OfferPage from "./Components/OfferPage/OfferPage";
import ProductPage from "./Components/Products/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<OfferPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
