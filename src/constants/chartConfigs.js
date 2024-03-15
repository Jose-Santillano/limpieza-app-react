// Ejemplo 1
const lineChartExample1 = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "Ventas",
      data: [80, 90, 85, 100, 110],
    },
  ],
  xaxis: {
    categories: [
      "Detergente",
      "Limpiavidrios",
      "Desinfectante",
      "Quitamanchas",
      "Desengrasante",
    ],
  },
};

const circleChartExample1 = {
  options: {
    labels: ['Ventas en linea', 'Ventas fisicas', 'Envios', 'Ganancias', 'Perdidas']
  },
  series: [44, 55, 41, 17, 15],
  labels: ["A", "B", "C", "D", "E"],
};

// Ejemplo 2
const lineChartExample2 = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "Ventas",
      data: [150, 130, 120, 140, 160],
    },
  ],
  xaxis: {
    categories: [
      "Detergente",
      "Limpiavidrios",
      "Desinfectante",
      "Quitamanchas",
      "Desengrasante",
    ],
  },
};

const circleChartExample2 = {
  options: {
    labels: [
      "Desengrasante",
      "Desinfectante",
      "Detergente",
      "Limpiavidrios",
      "Quitamanchas",
    ],
  },
  series: [25, 30, 20, 15, 10],
  labels: ["A", "B", "C", "D", "E"],
};

// Ejemplo 3
const lineChartExample3 = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "Ventas",
      data: [100, 110, 95, 120, 105],
    },
  ],
  xaxis: {
    categories: [
      "Detergente",
      "Limpiavidrios",
      "Desinfectante",
      "Quitamanchas",
      "Desengrasante",
    ],
  },
};

const circleChartExample3 = {
  options: {
    labels: [
      "Desengrasante",
      "Desinfectante",
      "Detergente",
      "Limpiavidrios",
      "Quitamanchas",
    ],
  },
  series: [20, 25, 30, 15, 10],
  labels: ["A", "B", "C", "D", "E"],
};

export {
  lineChartExample1,
  circleChartExample1,
  lineChartExample2,
  circleChartExample2,
  lineChartExample3,
  circleChartExample3,
};
