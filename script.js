// script.js

const malla = document.getElementById("malla");

const ramos = [
  // Nivel 1
  { nombre: "CÁLCULO I PARA INGENIERÍA", codigo: "10138", semestre: 1, abre: ["CÁLCULO II PARA INGENIERÍA"] },
  { nombre: "ÁLGEBRA I PARA INGENIERÍA", codigo: "10139", semestre: 1, abre: ["ÁLGEBRA II PARA INGENIERÍA"] },
  { nombre: "FÍSICA I PARA INGENIERÍA", codigo: "10140", semestre: 1, abre: ["FÍSICA II PARA INGENIERÍA"] },
  { nombre: "INTRODUCCIÓN AL DISEÑO EN INGENIERÍA", codigo: "10141", semestre: 1, abre: ["FUNDAMENTOS DE PROGRAMACIÓN PARA INGENIERÍA"] },

  // Nivel 2
  { nombre: "CÁLCULO II PARA INGENIERÍA", codigo: "10142", semestre: 2, req: ["CÁLCULO I PARA INGENIERÍA"], abre: ["CÁLCULO III PARA INGENIERÍA"] },
  { nombre: "ÁLGEBRA II PARA INGENIERÍA", codigo: "10143", semestre: 2, req: ["ÁLGEBRA I PARA INGENIERÍA"], abre: ["ECUACIONES DIFERENCIALES PARA INGENIERÍA"] },
  { nombre: "FÍSICA II PARA INGENIERÍA", codigo: "10144", semestre: 2, req: ["FÍSICA I PARA INGENIERÍA"], abre: ["FÍSICA MODERNA"] },
  { nombre: "FUNDAMENTOS DE PROGRAMACIÓN PARA INGENIERÍA", codigo: "10145", semestre: 2, req: ["INTRODUCCIÓN AL DISEÑO EN INGENIERÍA"], abre: ["PROGRAMACIÓN"] },

  // Nivel 3
  { nombre: "INGLÉS I", codigo: "10130", semestre: 3, abre: ["INGLÉS II"] },
  { nombre: "CÁLCULO III PARA INGENIERÍA", codigo: "10146", semestre: 3, req: ["CÁLCULO II PARA INGENIERÍA"] },
  { nombre: "ECUACIONES DIFERENCIALES PARA INGENIERÍA", codigo: "10155", semestre: 3, req: ["ÁLGEBRA II PARA INGENIERÍA"] },
  { nombre: "FUNDAMENTOS DE ECONOMÍA PARA INGENIERÍA", codigo: "10157", semestre: 3 },

  // Nivel 4
  { nombre: "INGLÉS II", codigo: "10131", semestre: 4, req: ["INGLÉS I"], abre: ["INGLÉS III"] },
  { nombre: "TALLER DE DISEÑO EN INGENIERÍA", codigo: "10148", semestre: 4, req: ["FUNDAMENTOS DE ECONOMÍA PARA INGENIERÍA"] },
  { nombre: "ANÁLISIS ESTADÍSTICO PARA INGENIERÍA", codigo: "10158", semestre: 4 },
  { nombre: "MÉTODOS NUMÉRICOS PARA INGENIERÍA", codigo: "10159", semestre: 4 },

  // Nivel 5
  { nombre: "INGLÉS III", codigo: "10132", semestre: 5, req: ["INGLÉS II"], abre: ["INGLÉS IV"] },
  { nombre: "ESTADÍSTICA APLICADA", codigo: "14134", semestre: 5, req: ["ANÁLISIS ESTADÍSTICO PARA INGENIERÍA"] },
  { nombre: "OPERACIONES Y PROCESOS INDUSTRIALES", codigo: "14135", semestre: 5 },
  { nombre: "ADMINISTRACIÓN", codigo: "14136", semestre: 5 },

  // Nivel 6
  { nombre: "INGLÉS IV", codigo: "10133", semestre: 6, req: ["INGLÉS III"] },
  { nombre: "MACROECONOMÍA", codigo: "14139", semestre: 6 },
  { nombre: "CONTABILIDAD Y COSTOS", codigo: "14140", semestre: 6 },
  { nombre: "INVESTIGACIÓN DE OPERACIONES", codigo: "14141", semestre: 6 },

  // Nivel 7
  { nombre: "DISEÑO DE PRODUCTOS Y SISTEMAS PRODUCTIVOS", codigo: "14144", semestre: 7 },
  { nombre: "MARKETING ESTRATÉGICO", codigo: "14145", semestre: 7 },
  { nombre: "MODELO ESTOCÁSTICOS", codigo: "14146", semestre: 7 },
  { nombre: "FINANZAS", codigo: "14147", semestre: 7 },

  // Nivel 8
  { nombre: "SISTEMAS DE INFORMACIÓN", codigo: "14149", semestre: 8 },
  { nombre: "ANÁLISIS DE DECISIONES", codigo: "14150", semestre: 8 },
  { nombre: "MODELAMIENTO DE SISTEMAS COMPLEJOS", codigo: "14151", semestre: 8 },
  { nombre: "INTELIGENCIA DE NEGOCIO", codigo: "14152", semestre: 8 },

  // Nivel 9
  { nombre: "TÓPICO DE ESPECIALIDAD I", codigo: "14154", semestre: 9 },
  { nombre: "GESTIÓN DE PERSONAS", codigo: "14155", semestre: 9 },
  { nombre: "GESTIÓN ESTRATÉGICA", codigo: "14157", semestre: 9 },
  { nombre: "ELECTIVO I", codigo: "14158", semestre: 9 },

  // Nivel 10
  { nombre: "TÓPICO DE ESPECIALIDAD II", codigo: "14159", semestre: 10, req: ["TÓPICO DE ESPECIALIDAD I"] },
  { nombre: "PROYECTO DE INGENIERÍA", codigo: "14160", semestre: 10 },
  { nombre: "GESTIÓN DE CADENA DE SUMINISTRO", codigo: "14161", semestre: 10 },
  { nombre: "TÓPICO DE ESPECIALIDAD III", codigo: "14162", semestre: 10 },

  // Nivel 11
  { nombre: "TRABAJO DE TITULACIÓN", codigo: "14164", semestre: 11 },

  // Otros ramos
  { nombre: "INTRODUCCIÓN A LA INGENIERÍA INDUSTRIAL", codigo: "14125", semestre: 1 },
  { nombre: "QUÍMICA GENERAL Y TERMODINÁMICA", codigo: "14126", semestre: 2 },
  { nombre: "PROGRAMACIÓN", codigo: "14129", semestre: 3 },
  { nombre: "INGENIERÍA DE SISTEMAS", codigo: "14132", semestre: 4 },
  { nombre: "MICROECONOMÍA", codigo: "14137", semestre: 5 },
  { nombre: "TECNOLOGÍAS PARA LA GESTIÓN", codigo: "14142", semestre: 6 },
  { nombre: "GESTIÓN DE EMPRENDIMIENTO", codigo: "14148", semestre: 7 },
  { nombre: "EVALUACIÓN DE PROYECTOS", codigo: "14153", semestre: 8 },
  { nombre: "GESTIÓN DE PRODUCCIÓN DE BIENES Y SERVICIOS", codigo: "14167", semestre: 9 },
  { nombre: "ELECTIVO II", codigo: "14163", semestre: 10 },
  { nombre: "FÍSICA MODERNA", codigo: "14165", semestre: 3 },
  { nombre: "DISEÑO DIGITAL COMPUTACIONAL", codigo: "14166", semestre: 4 },
  { nombre: "TALLER DE GESTIÓN Y LIDERAZGO", codigo: "14138", semestre: 5 },
  { nombre: "INTRODUCCIÓN A LA INNOVACIÓN", codigo: "14143", semestre: 6 }
];

const estado = {};

function crearRamos() {
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.innerHTML = `<strong>${ramo.codigo}</strong><br>${ramo.nombre}`;
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
  if (!e.target.closest(".ramo")) return;
  const div = e.target.closest(".ramo");
  if (div.classList.contains("bloqueado")) return;

  const nombre = div.dataset.nombre;
  estado[nombre] = true;
  div.classList.add("aprobado");
  div.classList.remove("bloqueado");

  const abre = ramos.find(r => r.nombre === nombre).abre || [];
  abre.forEach(abreNombre => {
    const divAbre = document.querySelector(`[data-nombre="${abreNombre}"]`);
    if (divAbre) {
      const reqs = ramos.find(r => r.nombre === abreNombre).req || [];
      const puedeActivarse = reqs.every(r => estado[r]);
      if (puedeActivarse) divAbre.classList.remove("bloqueado");
    }
  });
  actualizarEstado();
});

crearRamos();

