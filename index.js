import jsonData from './data.json' assert {type: 'json'}
import rowExperienceHTML from './experience.js'

/* Se add cambios para a futuro modificar de forma dinamica los datos */
let candidateData = jsonData;

if (candidateData.hasOwnProperty('experience') & Array.isArray(candidateData.experience)) {

  let tableexperiencen = document.querySelectorAll(`.experience-container tbody`);

  /**Verificar y agregar las experiencias */
  candidateData.experience.forEach((element, index) => {

    if (element.hasOwnProperty('data') & Array.isArray(element.data)) {

      element.data.forEach((position, i) => {

        /**Creo el contenedor de la fila nueva */
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

        if (element.data.length > 1 && i === 0) {
          th.setAttribute("rowspan", `${element.data.length}`);
        } else if (element.data.length > 1 && i > 0) {
          trModel.removeChild(th)
        }

        let period = trModel.querySelector("p.positions");

        period.innerText = position.positions;

        let startDate = trModel.querySelector("span.date-ini");
        startDate.innerText = position.startDate;

        let endDate = trModel.querySelector("span.date-end");
        endDate.innerText = position.endDate;

        let Responsibilities = trModel.querySelector(`.responsibilities ul`);

        if (position.hasOwnProperty('responsibilities') & Array.isArray(position.responsibilities)) {
          position.responsibilities.forEach(info => {
            let li = document.createElement('li');
            li.innerText = info;
            Responsibilities.appendChild(li);
          })
        }
        tableexperiencen[0].appendChild(trModel)
      })
    }
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
    continue
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

  dateEnd = dateEnd.split("-")
  dateIni = dateIni.split("-")

  dateEnd = new Date(parseInt(dateEnd[1]), parseInt(dateEnd[0]) + 1, 20).getTime();
  dateIni = new Date(parseInt(dateIni[1]), parseInt(dateIni[0]) + 1, 1).getTime();

  let years = Math.trunc((dateEnd - dateIni) / (1000 * 60 * 60 * 24 * 364))
  let meses = Math.round((dateEnd - dateIni) / (1000 * 60 * 60 * 24 * 30) - years * 12)

  if (meses === 12) { ++years; meses = 0 }

  years = years > 0 ? `${years} años ` : "";
  meses = meses > 0 ? `${meses} meses` : "";

  range[0].innerText = years + meses;
  ++i;
} while (i < count)
