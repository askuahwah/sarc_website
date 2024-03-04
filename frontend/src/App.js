import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Loginpage from "./component/pages/Loginpage";
import Dashboard from "./component/pages/Dashboard";
import Homepage from "./component/pages/Homepage";
import Registerpage from "./component/pages/Registerpage";
import Navbar from "./component/smallComponent/navbar";
import EventList from "./Event/Event";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Loginpage />} />
              <Route path="/register" element={<Registerpage />} />
              <Route path="/event" element={<EventList />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
