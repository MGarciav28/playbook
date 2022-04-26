// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', puntaje: 95 },
    { name: 'L', puntaje: 98 },
    { name: 'M', puntaje: 80 },
    { name: 'E', puntaje: 50 },
    { name: 'M', puntaje: 85 },
    { name: 'J', puntaje: 100 },
  ]
  
  const scoresGreaterEighty = scores.filter((score) => score.puntaje > 80)
  const scoresLowerEighty = scores.filter((score) => score.puntaje < 80)
  console.log("Ejemplo 8: Filtrando elementos por score")
  console.log(scoresGreaterEighty)
  console.log(scoresLowerEighty)
  