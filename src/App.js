import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Characters from "./pages/Characters";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personagens" element={<Characters />} />
          <Route path="/sobre" element={<About/>} />
          <Route path="/*" element={<h1>Not Found</h1>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
