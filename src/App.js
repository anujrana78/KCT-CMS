import "./App.css";
import Login from "./Login Components/Login";
import Menu from "./Components/Menu";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Course from "./Components/Course";
import Marksheet from "./Components/Marksheet";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Menu>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course" element={<Course />} />
          <Route path="/marksheet" element={<Marksheet />} />
        </Routes>
        </Menu>
      </BrowserRouter>
    </div>
  );
}

export default App;
