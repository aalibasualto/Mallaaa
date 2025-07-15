// script.js

const malla = document.getElementById("malla");

const ramos = [
  // PRIMER SEMESTRE
  { nombre: "Cálculo I", abre: ["Cálculo II"] },
  { nombre: "Álgebra I", abre: ["Álgebra II"] },
  { nombre: "Física I", abre: ["Física II"] },
  { nombre: "Introducción al Diseño en ingeniería", abre: ["Fundamentos de Programación para Ingeniería"] },
  { nombre: "Introducción a la Ingeniería Industrial", abre: [] },

  // SEGUNDO SEMESTRE
  { nombre: "Cálculo II", abre: ["Cálculo III"], req: ["Cálculo I"] },
  { nombre: "Álgebra II", abre: ["Ecuaciones Diferenciales", "Investigación de Operaciones"], req: ["Álgebra I"] },
  { nombre: "Física II", abre: ["Física Moderna"], req: ["Física I"] },
  { nombre: "Fundamentos de Programación para Ingeniería", abre: ["Programación"], req: ["Introducción al Diseño en ingeniería"] },
  { nombre: "Química general y Termodinámica", abre: ["Ingeniería de Sistemas", "Operaciones y Procesos Industriales"] },

  // TERCER SEMESTRE
  { nombre: "Inglés I", abre: ["Inglés II"] },
  { nombre: "Cálculo III", abre: ["Métodos Numéricos para Ingeniería", "Investigación de Operaciones"], req: ["Cálculo II"] },
  { nombre: "Ecuaciones Diferenciales", abre: ["Métodos Numéricos en Ingeniería de Sistemas"], req: ["Álgebra II"] },
  { nombre: "Fundamentos de Economía", abre: ["Taller de Diseño en Ingeniería", "Microeconomía"] },
  { nombre: "Programación", abre: ["Diseño Digital Computacional"], req: ["Fundamentos de Programación para Ingeniería"] },
  { nombre: "Física Moderna", abre: ["Operaciones y Procesos Industriales"], req: ["Física II"] },

  // CUARTO SEMESTRE
  { nombre: "Inglés II", abre: ["Inglés III"] },
  { nombre: "Taller de Diseño en Ingeniería", abre: ["Introducción a la Innovación"], req: ["Fundamentos de Economía"] },
  { nombre: "Análisis estadístico para ingeniería", abre: ["Estadística Aplicada"] },
  { nombre: "Métodos Numéricos para Ingeniería", abre: ["Modelamiento de Sistemas Complejos"], req: ["Cálculo III"] },
  { nombre: "Ingeniería de Sistemas", abre: ["Administración", "Taller de Gestión y Liderazgo"], req: ["Química general y Termodinámica"] },
  { nombre: "Diseño Digital Computacional", abre: ["Tecnologías para la Gestión"], req: ["Programación"] },

  // QUINTO SEMESTRE
  { nombre: "Inglés III", abre: ["Inglés IV"] },
  { nombre: "Estadística Aplicada", abre: ["Marketing Estratégico", "Modelos Estocásticos"], req: ["Análisis estadístico para ingeniería"] },
  { nombre: "Operaciones y Procesos Industriales", abre: ["Diseño de Productos y Sistemas Productivos"], req: ["Física Moderna", "Química general y Termodinámica"] },
  { nombre: "Administración", abre: ["Contabilidad y Costos", "Marketing Estratégico"], req: ["Ingeniería de Sistemas"] },
  { nombre: "Microeconomía", abre: ["Macroeconomía", "Sistemas de Información"], req: ["Fundamentos de Economía"] },
  { nombre: "Taller de Gestión y Liderazgo", abre: ["Gestión de Emprendimiento"], req: ["Ingeniería de Sistemas"] },

  // SEXTO SEMESTRE
  { nombre: "Inglés IV", abre: [] },
  { nombre: "Macroeconomía", abre: ["Sistemas de Información"], req: ["Microeconomía"] },
  { nombre: "Contabilidad y Costos", abre: ["Finanzas"], req: ["Administración"] },
  { nombre: "Investigación de Operaciones", abre: ["Modelos Estocásticos", "Gestión de Producción de Bienes y Servicios"], req: ["Álgebra II", "Cálculo III"] },
  { nombre: "Tecnologías para la Gestión", abre: ["Inteligencia de Negocio"], req: ["Diseño Digital Computacional"] },
  { nombre: "Introducción a la Innovación", abre: ["Gestión de Emprendimiento"], req: ["Taller de Diseño en Ingeniería"] },

  // SÉPTIMO SEMESTRE
  { nombre: "Diseño de Productos y Sistemas Productivos", abre: ["Gestión de Producción de Bienes y Servicios"], req: ["Operaciones y Procesos Industriales"] },
  { nombre: "Marketing Estratégico", abre: ["Inteligencia de Negocio", "Gestión Estratégica"], req: ["Estadística Aplicada", "Administración"] },
  { nombre: "Modelos Estocásticos", abre: ["Análisis de Decisiones", "Modelamiento de Sistemas Complejos"], req: ["Estadística Aplicada", "Investigación de Operaciones"] },
  { nombre: "Finanzas", abre: ["Evaluación de Proyectos", "Gestión Estratégica"], req: ["Contabilidad y Costos"] },
  { nombre: "Gestión de Emprendimiento", abre: ["Gestión de Personas"], req: ["Taller de Gestión y Liderazgo", "Introducción a la Innovación"] },

  // OCTAVO SEMESTRE
  { nombre: "Sistemas de Información", abre: ["Electivo I", "Gestión de Cadena de Suministro"], req: ["Macroeconomía", "Microeconomía"] },
  { nombre: "Análisis de Decisiones", abre: ["Tópico de Especialidad I"], req: ["Modelos Estocásticos"] },
  { nombre: "Modelamiento de Sistemas Complejos", abre: [], req: ["Métodos Numéricos para Ingeniería", "Modelos Estocásticos"] },
  { nombre: "Inteligencia de Negocio", abre: [], req: ["Tecnologías para la Gestión", "Marketing Estratégico"] },
  { nombre: "Evaluación de Proyectos", abre: ["Electivo I"], req: ["Finanzas"] },

  // NOVENO SEMESTRE
  { nombre: "Tópico de Especialidad I", abre: ["Tópico de Especialidad II", "Proyecto de Ingeniería"], req: ["Análisis de Decisiones"] },
  { nombre: "Gestión de Personas", abre: ["Proyecto de Ingeniería"], req: ["Gestión de Emprendimiento"] },
  { nombre: "Gestión Estratégica", abre: ["Proyecto de Ingeniería"], req: ["Marketing Estratégico", "Finanzas"] },
  { nombre: "Electivo I", abre: ["Proyecto de Ingeniería", "Tópico de Especialidad III", "Electivo II"], req: ["Evaluación de Proyectos", "Sistemas de Información"] },
  { nombre: "Gestión de Producción de Bienes y Servicios", abre: ["Proyecto de Ingeniería", "Gestión de Cadena de Suministro"], req: ["Diseño de Productos y Sistemas Productivos", "Investigación de Operaciones"] },

  // DÉCIMO SEMESTRE
  { nombre: "Tópico de Especialidad II", abre: ["Trabajo de Titulación"], req: ["Tópico de Especialidad I"] },
  { nombre: "Proyecto de Ingeniería", abre: ["Trabajo de Titulación"], req: ["Tópico de Especialidad I", "Gestión de Personas", "Gestión Estratégica", "Electivo I", "Gestión de Producción de Bienes y Servicios"] },
  { nombre: "Gestión de Cadena de Suministro", abre: ["Trabajo de Titulación"], req: ["Sistemas de Información", "Gestión de Producción de Bienes y Servicios"] },
  { nombre: "Tópico de Especialidad III", abre: ["Trabajo de Titulación"], req: ["Electivo I"] },
  { nombre: "Electivo II", abre: ["Trabajo de Titulación"], req: ["Electivo I"] },

  // UNDECIMO SEMESTRE
  { nombre: "Trabajo de Titulación", abre: [] }
];

const estado = {};

function crearRamos() {
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;
    div.dataset.nombre = ramo.nombre;
    if (ramo.req && ramo.req.length > 0) {
      div.classList.add("bloqueado");
    }
    estado[ramo.nombre] = false;
    malla.appendChild(div);
  });
}

function actualizarEstado() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const ramo = ramos.find(r => r.nombre === nombre);
    const requisitos = ramo.req || [];
    const puedeActivarse = requisitos.every(r => estado[r]);
    if (!estado[nombre] && puedeActivarse) {
      div.classList.remove("bloqueado");
    }
  });
}

malla.addEventListener("click", e => {
  if (!e.target.classList.contains("ramo")) return;
  if (e.target.classList.contains("bloqueado")) return;

  const nombre = e.target.dataset.nombre;
  estado[nombre] = true;
  e.target.classList.add("aprobado");
  e.target.classList.remove("bloqueado");

  const abre = ramos.find(r => r.nombre === nombre).abre;
  abre.forEach(abreNombre => {
    const div = document.querySelector(`[data-nombre="${abreNombre}"]`);
    if (div) {
      const requisitos = ramos.find(r => r.nombre === abreNombre).req || [];
      const puedeActivarse = requisitos.every(r => estado[r]);
      if (puedeActivarse) div.classList.remove("bloqueado");
    }
  });
  actualizarEstado();
});

crearRamos();
