import './App.css';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import One from './Routes/One';
import Two from './Routes/Two';
import Three from './Routes/Three';


function App() {
  return (
    <Router>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<One />} />
          <Route path="/two" element={<Two />} />
          <Route path="/three" element={<Three />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
