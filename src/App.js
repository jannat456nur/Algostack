import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />

        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
