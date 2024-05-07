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
import React, { useState } from 'react';
import languageEs from './i18n/es.json';
import languageEn from './i18n/en.json';

import dataEn from './models/en/userData.json'
import dataEs from './models/es/userData.json'

function App() {

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };

  let labels = "";

  if (selectedLanguage === "es") {
    labels = languageEs;
    defaultData = dataEs;
  }
  else {
    labels = languageEn;
    defaultData = dataEn;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Curriculum_vitae" element={<Layout><Homepage dataView={defaultData} selectedLanguage={selectedLanguage} onChangeLanguage={(e) => handleLanguageChange(e)} labels={labels} /></Layout>} />
          <Route path="/Curriculum_vitae/MakeCV" element={<Layout><MakeCV dataView={defaultData} selectedLanguage={selectedLanguage} onChangeLanguage={(e) => handleLanguageChange(e)} labels={labels} /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
