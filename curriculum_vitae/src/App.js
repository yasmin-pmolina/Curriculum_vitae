import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css';
import './css/Print.css';
import defaultData from './models/userData.json'
import Homepage from './pages/home.jsx';
import MakeCV from './pages/makeCv';
import Layout from './components/layout';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
          <Route path="/Curriculum_vitae" element={<Layout><Homepage dataView ={defaultData}/></Layout>} />
          <Route path="/Curriculum_vitae/MakeCV" element={<Layout><MakeCV dataView ={defaultData} /></Layout>} />
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
