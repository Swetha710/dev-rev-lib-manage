import './App.css';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import CategoriesPage from './pages/CategoriesPage';
import BookDesc from './pages/BookDesc';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
           <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/categories" element={<CategoriesPage />}></Route>
            <Route path="/bookdescription" element={<BookDesc />}></Route>
            <Route path="/aboutus" element={<About />}></Route>

          </Routes> 
      </div>
    </Router>

  );
}

export default App;
