import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'

function App() {

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route path="/" element={ isAuthenticated ? <Home /> : <Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
