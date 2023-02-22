import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Color, Solver } from './color.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/**
 * Ajustar los estilos y colores de la pagina 
 */
window.addEventListener('load', function () {

  //const color = '#DC9B40';//Naranja
  const color = '#59A4A0';//verde agua
  //const color = '#0000ff';//azul
  //const color = '#ff0000';//Rojo
  //const color = '#00ff00';//verde 0 255 0
  let iconFormat = document.querySelectorAll("span.icon-format");

  iconFormat.forEach(element => {

    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const rgbColor = [r, g, b];
    rgbColor.sort((a, b) => b - a);

    const colorc = new Color(r, b, g);
    const solver = new Solver(colorc);
    const result = solver.solve();
    const filter = result.filter;

    element.setAttribute("style", filter)
  })
});