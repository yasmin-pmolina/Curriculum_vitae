import jsonData from './data.json' assert {type: 'json'}
import rowExperienceHTML from './experience.js'
import rowEducationHTML from './education.js'
import certificationsHTML from './certifications.js'
import { ICON_FORMAT_COLOR, ASSETS_IMG, LIST_ICONS } from './const.js'
import { set_color_icon_svg, create_config_tag_a, create_objet_with_svg } from './util.js'

/*Datos json */
let candidateData = jsonData;

/**Secciones HTML */
let education = document.querySelector(`div.personal-data span.education`);
let tableExperiencen = document.querySelector(`.experience-container tbody`);
let certifications = document.querySelector(`div.personal-data span.certifications`);
let languages = document.querySelector(`div.personal-data span.languages ul`);
let hardSkills = document.querySelector(`div.footer-container .hardSkills div.skills`);
let softSkills = document.querySelector(`div.footer-container .softSkills ul`);
let titulo = document.querySelector(`.card-title.titulo`);
let bio = document.querySelector("div.card .card-text");
let contactInfo = document.querySelector("div.card .contact-info");

/**
 * 
 *  Se agregan los datos de educacion
 */
if (candidateData.hasOwnProperty('education') & Array.isArray(candidateData.education)) {

  candidateData.education.forEach((element) => {

    let span = document.createElement('span');
    span.innerHTML = JSON.parse(JSON.stringify(new String(rowEducationHTML)));
    span.classList.add(`m-1`);

    let entity = span.querySelector("p.entity");
    entity.innerText = element.entity;

    let degree = span.querySelector("p.degree");
    degree.innerText = element.degree;

    let date = span.querySelector("span.date");
    date.innerText = element.date;

    education.appendChild(span);
  })
}

/**
 * 
 *  Se agregan los datos de certifications
*/
if (candidateData.hasOwnProperty('certifications') & Array.isArray(candidateData.certifications)) {

  candidateData.certifications.forEach((element) => {
    let span = document.createElement('span');
    span.innerHTML = JSON.parse(JSON.stringify(new String(certificationsHTML)));
    span.setAttribute("class", "m-2");

    let entity = span.querySelector("p.entity");
    entity.innerText = element.entity;

    span.querySelector("span.date").innerText = element.date;

    let link = span.querySelector("a");
    link.innerText = element.name;
    link.setAttribute("href", element.link);

    certifications.appendChild(span);
  })
}

/**
 * 
 *  Se agregan los datos de Idiomas
*/
if (candidateData.hasOwnProperty('languages') & Array.isArray(candidateData.languages)) {

  candidateData.languages.forEach((element) => {

    let li = document.createElement('li');

    li.innerHTML = JSON.parse(JSON.stringify(new String(`<b>${element.name}:</b> ${element.level}`)));

    languages.appendChild(li);
  })
}
/**
 * 
 *  Se agregan los datos de las experiencias laborales
 */
if (candidateData.hasOwnProperty('experience') & Array.isArray(candidateData.experience)) {

  /**Verificar y agregar las experiencias */
  candidateData.experience.forEach((element, index) => {

    if (element.hasOwnProperty('data') & Array.isArray(element.data)) {

      element.data.forEach((position, i) => {

        let trModel = document.createElement('tr');
        trModel.classList.add(`experience-${index + 1}`);
        trModel.innerHTML = JSON.parse(JSON.stringify(new String(rowExperienceHTML)));

        let entity = trModel.getElementsByClassName("entity");
        entity[0].innerText = element.entity;

        let place = trModel.querySelector(".small-thin-paragraph.fst-italic.fw-normal span");
        place.innerText = element.place;

        let range = trModel.getElementsByClassName("time-range");
        range[0].innerText = element.period;

        let th = trModel.querySelector(`th`);

        if (element.data.length > 1 && i === 0)
          th.setAttribute("rowspan", `${element.data.length}`);
        else if (element.data.length > 1 && i > 0)
          trModel.removeChild(th);

        let period = trModel.querySelector("p.positions");
        period.innerText = position.positions;

        let startDate = trModel.querySelector("span.date-ini");
        startDate.innerText = position.startDate;

        let endDate = trModel.querySelector("span.date-end");
        endDate.innerText = position.endDate;

        let Responsibilities = trModel.querySelector(`.responsibilities ul`);

        if (position.hasOwnProperty('responsibilities') & Array.isArray(position.responsibilities)) {
          position.responsibilities.forEach(information => {
            let li = document.createElement('li');
            li.innerText = information;
            Responsibilities.appendChild(li);
          })
        }
        tableExperiencen.appendChild(trModel);
      })
    }
  })
}

/**
 * 
 * Codigo para agregar las hard skills 
 * 
 * <span class="col text-center">
 *    <object  id="icon-skills" type="image/svg+xml" data="./assets/img/git.svg" class="bi">
 *    </object>
 *    <p>Git</p>
 *  </span>
 */
if (candidateData.hasOwnProperty('hardSkills') & Array.isArray(candidateData.hardSkills)) {

  candidateData.hardSkills.forEach((element) => {

    let skill = LIST_ICONS.filter(skill => element.name === skill.name);

    if (skill.length > 0) {
      let span = document.createElement('span');
      let object = document.createElement('object');
      let p = document.createElement('p');

      span.setAttribute("class", "col text-center my-1");

      object.setAttribute("id", "icon-skills");
      object.setAttribute("type", "image/svg+xml");
      object.setAttribute("data", `${ASSETS_IMG}${skill[0].icon}`);
      object.setAttribute("class", `bi ${skill[0].name.toLowerCase()}`);
      p.innerText = `${skill[0].name}`;

      span.appendChild(object);
      span.appendChild(p);

      hardSkills.appendChild(span);
    }
  })
}

/**
 *  Codigo para agregar las doft skills 
 *  se agregan en un objeto lista
 */
if (candidateData.hasOwnProperty('softSkills') & Array.isArray(candidateData.softSkills)) {

  candidateData.softSkills.forEach((element) => {
    let li = document.createElement('li');
    li.innerHTML = element.name;
    softSkills.appendChild(li);
  })
}

/**
 * Se agrega el titulo del cv y la biografía
 */
if (candidateData.hasOwnProperty('applicant')) {
  titulo.innerText = candidateData.applicant.name?.toUpperCase();
  bio.innerText = candidateData.applicant.bio;
}

/**
 * <span class="row pb-1">
 *   <a href="#" class="p-0 pe-1">
 *     <object type="image/svg+xml" data="./assets/img/icon-phone.svg" class="phone">
       </object>(+54) 9-11-24082020</a>
 * </span>
 */


if (candidateData.hasOwnProperty('contactInfo') & Array.isArray(candidateData.contactInfo)) {

  candidateData.contactInfo.forEach((element) => {

    let iconObj; 
    let icon = LIST_ICONS.filter(item => element.type.toLowerCase() === item.name.toLowerCase());
    let span = document.createElement('span');
    span.setAttribute("class", "row");

    if (icon.length > 0) {
       iconObj = create_objet_with_svg(`bi-${icon[0].name.toLowerCase()} icon-format`, `${ASSETS_IMG}${icon[0].icon}`)
    }else 
       iconObj = create_objet_with_svg("bi-link icon-format", `${ASSETS_IMG}icon-link.svg`)

    let href, target;

      switch (element.type) {
        case "phone":
          href = "#";
          target = "";
          break
        case "mail":
          href = `mailto:${element.link}?`;
          target = "_blank";
          break
        case "linkedin":
        case "github":
        default:
          target = "_blank";
          href = `${element.link}`;
          break;
      }

      let a = create_config_tag_a(href, target, "d-flex align-items-center m-0 p-0", iconObj, `${element.name}`)
      span.appendChild(a);
      contactInfo.appendChild(span);
    
  })
}





/**
 * 
 * Calculamos de forma automatica la duracion
 * de cada experiencia laboral
 */
let count = document.querySelectorAll(".experience-container tbody tr").length;
let i = 0;

do {

  let experiencen = document.querySelectorAll(`.experience-container tbody tr.experience-${i + 1}`);
  if (experiencen.length <= 0) {
    ++i;
    continue;
  }

  let dateIni = experiencen[experiencen.length - 1].getElementsByClassName("date-ini");
  dateIni = dateIni[0].innerText;

  let dateEnd = experiencen[0].getElementsByClassName("date-end");
  const date = new Date();

  Array.prototype.forEach.call(dateEnd, function (element) {
    if (element.innerText === "PRESENTE") {
      element.myDate = (date.getMonth() + 1) + "-" + date.getFullYear();
    }
  });

  dateEnd = dateEnd[0].myDate ? dateEnd[0].myDate : dateEnd[0].innerText;

  let range = experiencen[0].getElementsByClassName("time-range");

  dateEnd = dateEnd.split("-");
  dateIni = dateIni.split("-");

  dateEnd = new Date(parseInt(dateEnd[1]), parseInt(dateEnd[0]) + 1, 20).getTime();
  dateIni = new Date(parseInt(dateIni[1]), parseInt(dateIni[0]) + 1, 1).getTime();

  let years = Math.trunc((dateEnd - dateIni) / (1000 * 60 * 60 * 24 * 364));
  let meses = Math.round((dateEnd - dateIni) / (1000 * 60 * 60 * 24 * 30) - years * 12);

  if (meses === 12) { ++years; meses = 0 }

  years = years > 0 ? `${years} años ` : "";
  meses = meses > 0 ? `${meses} meses` : "";

  range[0].innerText = years + meses;
  ++i;
} while (i < count);



window.addEventListener('load', function () {
  /**
  * Al terminar de leer todo fijamos el color de los iconos
  * queden mantener el formato de color que se indica con la clase 
  * "icon-format"
 */
  let items = document.querySelectorAll(".icon-format");
  items.forEach(element => {
    let nameClassElement = element.className.replace(" ", ".");
    set_color_icon_svg("." + nameClassElement, ICON_FORMAT_COLOR)
  })
});