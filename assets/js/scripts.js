const elementoLista = document.querySelector("ul")
const elementoInput = document.querySelector("input")
const elementoBotao = document.querySelector("button")

const tasks = []

function tasksView() {

    elementoLista.innerHTML =''

    for(task of tasks) {
        const elementoTask = document.createElement('li')
        const textoTask = document.createTextNode(task)

        const elementoLink = document.createAttribute('a')
        const pos = tasks.indexOf(task)
        
        elementoTask.appendChild(textoTask)
        elementoLista.appendChild(elementoTask)
        
    }
}

tasksView()

function addTask() {
    const textoTask = elementoInput.value
    tasks.push(textoTask)
    elementoInput.value = ''
    tasksView()
}

elementoBotao.setAttribute('onclick', 'addTask()')

function delTask(pos) {
    tasks.splice(pos, 1)
    tasksView()
}