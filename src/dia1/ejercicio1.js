// Esta función calcula el promedio de calificaciones

let num = [80, 90, 75, 95, 88];

function calculateAverage(calificaciones) {
  let sum = 0;

  for (let calificacion in calificaciones) {
    sum += calificacion;
  }

  return sum / calificaciones.length;
}

const average = calculateAverage(num);
console.log(average);