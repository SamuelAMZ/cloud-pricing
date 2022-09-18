import Home from "./pages/Home";
import About from "./pages/About";
import Api from "./pages/Api";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </div>
  );
}

export default App;
