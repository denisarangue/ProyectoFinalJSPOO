import Curso from "./class/Curso.js"

const elem = document.getElementById("cursos")

// Imprime un curso en el DOM (Recibe un objeto de tipo curso)
function mostrarCurso(curso) {
    const hijo = document.createElement("div")
    hijo.classList.add("card")
    hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
        <div class="s-center">
            <span class="small">Cantidad de clases: ${curso.getClases()}</span>
        </div>
    </div>
    `

    elem.appendChild(hijo)
}

// Creación dinámica de los cursos llamando a la función
const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", e => {
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso)
    formulario.reset()
})

