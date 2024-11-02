import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Login</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
