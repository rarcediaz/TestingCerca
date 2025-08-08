import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateNoticiasCortas from "./pages/CreateNoticiaCorta"; // adjust the import path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-noticiascortas" element={<CreateNoticiasCortas />} />
        {/* add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
