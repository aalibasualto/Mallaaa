const ramos = [
  { nombre: "Cálculo I", sem: 1, abre: ["Cálculo II"] },
  { nombre: "Álgebra I", sem: 1, abre: ["Álgebra II"] },
  { nombre: "Física I", sem: 1, abre: ["Física II"] },
  { nombre: "Introducción al Diseño en ingeniería", sem: 1, abre: ["Fundamentos de Programación para Ingeniería"] },
  { nombre: "Introducción a la Ingeniería Industrial", sem: 1 },

  { nombre: "Cálculo II", sem: 2, abre: ["Cálculo III"], req: ["Cálculo I"] },
  { nombre: "Álgebra II", sem: 2, abre: ["Ecuaciones Diferenciales", "Investigación de Operaciones"], req: ["Álgebra I"] },
  { nombre: "Física II", sem: 2, abre: ["Física Moderna"], req: ["Física I"] },
  { nombre: "Fundamentos de Programación para Ingeniería", sem: 2, abre: ["Programación"], req: ["Introducción al Diseño en ingeniería"] },
  { nombre: "Química general y Termodinámica", sem: 2, abre: ["Ingeniería de Sistemas", "Operaciones y Procesos Industriales"] },

  // Puedes continuar esta estructura para los semestres restantes...
];

const malla = document.getElementById("malla");

// Agrupar por semestre
const semestres = {};
ramos.forEach(r => {
  if (!semestres[r.sem]) semestres[r.sem] = [];
  semestres[r.sem].push(r);
});

// Estado de ramos aprobados
const aprobados = new Set();

// Crear elementos
for (let i = 1; i <= 11; i++) {
  const col = document.createElement("div");
  col.className = "semestre";
  const titulo = document.createElement("h3");
  titulo.textContent = `Semestre ${i}`;
  col.appendChild(titulo);

  (semestres[i] || []).forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;
    if (ramo.req && ramo.req.length > 0) {
      div.classList.add("bloqueado");
    }
    ramo.elem = div; // referenciar
    div.addEventListener("click", () => aprobarRamo(ramo));
    col.appendChild(div);
  });

  malla.appendChild(col);
}

function aprobarRamo(ramo) {
  if (ramo.req && ramo.req.some(r => !aprobados.has(r))) return;
  if (aprobados.has(ramo.nombre)) return;

  ramo.elem.classList.add("aprobado");
  ramo.elem.classList.remove("bloqueado");
  aprobados.add(ramo.nombre);

  // Desbloquear siguientes
  (ramo.abre || []).forEach(nombre => {
    const siguiente = ramos.find(r => r.nombre === nombre);
    if (siguiente && siguiente.req?.every(r => aprobados.has(r))) {
      siguiente.elem.classList.remove("bloqueado");
    }
  });
}
