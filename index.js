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

  let dateIni = experiencen[experiencen.length - 1].getElementsByClassName("fecha-ini");
  dateIni = dateIni[0].innerText;

  let dateEnd = experiencen[0].getElementsByClassName("fecha-end");
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


