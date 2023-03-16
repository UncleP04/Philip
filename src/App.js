import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ReadyPage from "./Pages/YouReady";
import ContactPage from "./Pages/ContactPage";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/design" element={<PortfolioPage />}/>
          <Route path="/ready" element={<ReadyPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
