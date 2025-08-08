const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const hoy = new Date();
const indiceDia = hoy.getDay();
const diaSemana = dias[indiceDia];

// Mostrar el día actual capitalizado
//document.getElementById("dia-semana").textContent =
//  diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);

// Buscar los bloques del día actual
let diasDOM = document.querySelectorAll('.dia');

diasDOM.forEach(diaDOM => {
  const nombreElem = diaDOM.querySelector('.nombreDia');
  if (!nombreElem) return;

  const nombre = nombreElem.textContent.trim().toLowerCase();
  if (nombre === diaSemana.toLowerCase()) {
    // Encontramos el día actual
    const cuadros = diaDOM.querySelectorAll('.cuadro');
    let d = 0;
    cuadros.forEach(cuadro => {
      if (cuadro.textContent.includes('/')) {
        d += 3;
      }
    });

    // Resaltar el elemento .web correspondiente a "d horas"
    const webs = document.querySelectorAll('.web');
    const regex = new RegExp(`^${d}h\\b`);
    webs.forEach(web => {
      if (regex.test(web.textContent.trim())) {
        web.style.backgroundColor = '#d08190';
      }
    });
  }
});
