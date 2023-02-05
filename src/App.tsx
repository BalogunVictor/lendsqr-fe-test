import Login from "./Components/Login/Login";
import './App.scss'
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Routes>
          <Route path="/" element ={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
