import { useContext } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import Borrow from "./pages/Borrow";

function App() {
  const { isAuthenticated } =
    useContext(AuthContext);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/borrow" element={<Borrow />} />
      </Routes>
    </>
  );
}

export default App;