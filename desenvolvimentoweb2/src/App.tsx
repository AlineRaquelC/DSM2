import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Palpite from "./pages/Palpite";
import Historico from "./pages/Historico";
import { PalpiteProvider } from "./context/PalpiteContext";

function App() {
  return (
    <PalpiteProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palpite" element={<Palpite />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </Router>
    </PalpiteProvider>
  );
}

export default App;
