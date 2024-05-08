import "./App.css";
import { Home, MyForm, NewForm } from "./components/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-white h-200  items-center justify-center w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<MyForm />} />
          <Route path="/newform" element={<NewForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
