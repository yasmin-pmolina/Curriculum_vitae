import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css';
import './css/Print.css';
import defaultData from './models/userData.json'
import Navbar from './components/navbar';
import Homepage from './pages/home.jsx';
import MakeCV from './pages/makeCv';


function App() {
  return (

    <div className="App">
     <div className="navbar-container">
      <Navbar/> 
     </div>
     <BrowserRouter>
      <Routes>
          <Route exact  path="/" element={<Homepage dataView ={defaultData} />} />
          <Route path="/MakeCV" element={<MakeCV dataView ={defaultData} />} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
