/**
 * Funcion para fijar el color los iconos para mantener
 *  el fomato del documento 
 * */
export function set_color_icon_svg(selector, color) {
  var svg = document.querySelector(selector);
  var paths = svg.contentDocument.getElementsByTagName("path");
  for (var i = 0; i < paths.length; i++) {
    paths[i].setAttribute("fill", color);
  }
}

/**
 * 
 * @param {string} className 
 * @param {string} data 
 */
export function create_objet_with_svg(className, data) {

  let object = document.createElement('object');
  object.setAttribute("type", "image/svg+xml");
  object.setAttribute("data", data);
  object.setAttribute("class", className);
  return object;
}

/**
 * 
 * @param {string} href 
 * @param {string} target 
 * @param {string} className 
 * @param {HTMLElement} icon 
 * @param {string} texto 
 * @returns 
 */
export function create_config_tag_a(href, target, className, icon, texto) {

  let a = document.createElement('a');
  a.setAttribute("href", href);
  a.setAttribute("target", target);
  a.setAttribute("class", className);

  let name = document.createElement('span');
  name.setAttribute("class", className);
  name.innerText = texto;

  a.appendChild(icon);
  a.appendChild(name);

  return a;
}