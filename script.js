
const malla = document.getElementById("malla");

const ramos = [
  { nombre: "Cálculo I", abre: ["Cálculo II"], semestre: 1 },
  { nombre: "Álgebra I", abre: ["Álgebra II"], semestre: 1 },
  { nombre: "Física I", abre: ["Física II"], semestre: 1 },
  { nombre: "Introducción al Diseño en ingeniería", abre: ["Fundamentos de Programación para Ingeniería"], semestre: 1 },
  { nombre: "Introducción a la Ingeniería Industrial", abre: [], semestre: 1 },

  { nombre: "Cálculo II", abre: ["Cálculo III"], req: ["Cálculo I"], semestre: 2 },
  { nombre: "Álgebra II", abre: ["Ecuaciones Diferenciales", "Investigación de Operaciones"], req: ["Álgebra I"], semestre: 2 },
  { nombre: "Física II", abre: ["Física Moderna"], req: ["Física I"], semestre: 2 },
  { nombre: "Fundamentos de Programación para Ingeniería", abre: ["Programación"], req: ["Introducción al Diseño en ingeniería"], semestre: 2 },
  { nombre: "Química general y Termodinámica", abre: ["Ingeniería de Sistemas", "Operaciones y Procesos Industriales"], semestre: 2 },

  { nombre: "Inglés I", abre: ["Inglés II"], semestre: 3 },
  { nombre: "Cálculo III", abre: ["Métodos Numéricos para Ingeniería", "Investigación de Operaciones"], req: ["Cálculo II"], semestre: 3 },
  { nombre: "Ecuaciones Diferenciales", abre: ["Métodos Numéricos en Ingeniería de Sistemas"], req: ["Álgebra II"], semestre: 3 },
  { nombre: "Fundamentos de Economía", abre: ["Taller de Diseño en Ingeniería", "Microeconomía"], semestre: 3 },
  { nombre: "Programación", abre: ["Diseño Digital Computacional"], req: ["Fundamentos de Programación para Ingeniería"], semestre: 3 },
  { nombre: "Física Moderna", abre: ["Operaciones y Procesos Industriales"], req: ["Física II"], semestre: 3 },

  { nombre: "Inglés II", abre: ["Inglés III"], semestre: 4 },
  { nombre: "Taller de Diseño en Ingeniería", abre: ["Introducción a la Innovación"], req: ["Fundamentos de Economía"], semestre: 4 },
  { nombre: "Análisis estadístico para ingeniería", abre: ["Estadística Aplicada"], semestre: 4 },
  { nombre: "Métodos Numéricos para Ingeniería", abre: ["Modelamiento de Sistemas Complejos"], req: ["Cálculo III"], semestre: 4 },
  { nombre: "Ingeniería de Sistemas", abre: ["Administración", "Taller de Gestión y Liderazgo"], req: ["Química general y Termodinámica"], semestre: 4 },
  { nombre: "Diseño Digital Computacional", abre: ["Tecnologías para la Gestión"], req: ["Programación"], semestre: 4 },

  { nombre: "Inglés III", abre: ["Inglés IV"], semestre: 5 },
  { nombre: "Estadística Aplicada", abre: ["Marketing Estratégico", "Modelos Estocásticos"], req: ["Análisis estadístico para ingeniería"], semestre: 5 },
  { nombre: "Operaciones y Procesos Industriales", abre: ["Diseño de Productos y Sistemas Productivos"], req: ["Física Moderna", "Química general y Termodinámica"], semestre: 5 },
  { nombre: "Administración", abre: ["Contabilidad y Costos", "Marketing Estratégico"], req: ["Ingeniería de Sistemas"], semestre: 5 },
  { nombre: "Microeconomía", abre: ["Macroeconomía", "Sistemas de Información"], req: ["Fundamentos de Economía"], semestre: 5 },
  { nombre: "Taller de Gestión y Liderazgo", abre: ["Gestión de Emprendimiento"], req: ["Ingeniería de Sistemas"], semestre: 5 },

  { nombre: "Inglés IV", abre: [], semestre: 6 },
  { nombre: "Macroeconomía", abre: ["Sistemas de Información"], req: ["Microeconomía"], semestre: 6 },
  { nombre: "Contabilidad y Costos", abre: ["Finanzas"], req: ["Administración"], semestre: 6 },
  { nombre: "Investigación de Operaciones", abre: ["Modelos Estocásticos", "Gestión de Producción de Bienes y Servicios"], req: ["Álgebra II", "Cálculo III"], semestre: 6 },
  { nombre: "Tecnologías para la Gestión", abre: ["Inteligencia de Negocio"], req: ["Diseño Digital Computacional"], semestre: 6 },
  { nombre: "Introducción a la Innovación", abre: ["Gestión de Emprendimiento"], req: ["Taller de Diseño en Ingeniería"], semestre: 6 },

  { nombre: "Diseño de Productos y Sistemas Productivos", abre: ["Gestión de Producción de Bienes y Servicios"], req: ["Operaciones y Procesos Industriales"], semestre: 7 },
  { nombre: "Marketing Estratégico", abre: ["Inteligencia de Negocio", "Gestión Estratégica"], req: ["Estadística Aplicada", "Administración"], semestre: 7 },
  { nombre: "Modelos Estocásticos", abre: ["Análisis de Decisiones", "Modelamiento de Sistemas Complejos"], req: ["Estadística Aplicada", "Investigación de Operaciones"], semestre: 7 },
  { nombre: "Finanzas", abre: ["Evaluación de Proyectos", "Gestión Estratégica"], req: ["Contabilidad y Costos"], semestre: 7 },
  { nombre: "Gestión de Emprendimiento", abre: ["Gestión de Personas"], req: ["Taller de Gestión y Liderazgo", "Introducción a la Innovación"], semestre: 7 },

  { nombre: "Sistemas de Información", abre: ["Electivo I", "Gestión de Cadena de Suministro"], req: ["Macroeconomía", "Microeconomía"], semestre: 8 },
  { nombre: "Análisis de Decisiones", abre: ["Tópico de Especialidad I"], req: ["Modelos Estocásticos"], semestre: 8 },
  { nombre: "Modelamiento de Sistemas Complejos", abre: [], req: ["Métodos Numéricos para Ingeniería", "Modelos Estocásticos"], semestre: 8 },
  { nombre: "Inteligencia de Negocio", abre: [], req: ["Tecnologías para la Gestión", "Marketing Estratégico"], semestre: 8 },
  { nombre: "Evaluación de Proyectos", abre: ["Electivo I"], req: ["Finanzas"], semestre: 8 },

  { nombre: "Tópico de Especialidad I", abre: ["Tópico de Especialidad II", "Proyecto de Ingeniería"], req: ["Análisis de Decisiones"], semestre: 9 },
  { nombre: "Gestión de Personas", abre: ["Proyecto de Ingeniería"], req: ["Gestión de Emprendimiento"], semestre: 9 },
  { nombre: "Gestión Estratégica", abre: ["Proyecto de Ingeniería"], req: ["Marketing Estratégico", "Finanzas"], semestre: 9 },
  { nombre: "Electivo I", abre: ["Proyecto de Ingeniería", "Tópico de Especialidad III", "Electivo II"], req: ["Evaluación de Proyectos", "Sistemas de Información"], semestre: 9 },
  { nombre: "Gestión de Producción de Bienes y Servicios", abre: ["Proyecto de Ingeniería", "Gestión de Cadena de Suministro"], req: ["Diseño de Productos y Sistemas Productivos", "Investigación de Operaciones"], semestre: 9 },

  { nombre: "Tópico de Especialidad II", abre: ["Trabajo de Titulación"], req: ["Tópico de Especialidad I"], semestre: 10 },
  { nombre: "Proyecto de Ingeniería", abre: ["Trabajo de Titulación"], req: ["Tópico de Especialidad I", "Gestión de Personas", "Gestión Estratégica", "Electivo I", "Gestión de Producción de Bienes y Servicios"], semestre: 10 },
  { nombre: "Gestión de Cadena de Suministro", abre: ["Trabajo de Titulación"], req: ["Sistemas de Información", "Gestión de Producción de Bienes y Servicios"], semestre: 10 },
  { nombre: "Tópico de Especialidad III", abre: ["Trabajo de Titulación"], req: ["Electivo I"], semestre: 10 },
  { nombre: "Electivo II", abre: ["Trabajo de Titulación"], req: ["Electivo I"], semestre: 10 },

  { nombre: "Trabajo de Titulación", abre: [], semestre: 11 }
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
    const semestreDiv = document.querySelector(`.semestre[data-semestre="${ramo.semestre}"]`);
    semestreDiv.appendChild(div);
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
