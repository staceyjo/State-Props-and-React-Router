import './App.css';
//Import route and our components
import { Route, Routes } from "react-router-dom";
import EmployeePage from "./pages/EmployeePage";
import Homepage from "./pages/Homepage";
import Main from "./pages/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/employeepage/:employeeID" element={<EmployeePage />} />
      </Routes>
    </div>
  );
}

export default App;
