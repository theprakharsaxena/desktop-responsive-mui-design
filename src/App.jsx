import { BrowserRouter, Route, Routes } from "react-router-dom";
// import OurCause from "./pages/OurCause";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/" element={<OurCause />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
