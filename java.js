let input = document.getElementById("input-principal")
let button = document.getElementById("botao-adicionar")
let tarefa = document.getElementById("nome-tarefa-id")
let listaCompleta = document.getElementById("tarefas")
let arrayDeTarefas = []
recarregarTarefas()

function mostrarTarefas() {
    let novaLi = ""
    arrayDeTarefas.forEach((tarefa, index) => {

        novaLi = novaLi + ` <li class="item-tarefa ${tarefa.concluida == true ? 'concluido' : ""}">
            <button class="rocket-button" onclick="concluirTarefa(${index})">
            <i class="fas fa-rocket"></i>
            </button>
        
            <p class="nome-tarefa ${tarefa.concluida == true ? 'concluido' : ""}" id="nome-tarefa-id">${tarefa.tarefa}</p>

            <button class="trash-button" onclick="deletarTarefa(${index})">
            <i class="fas fa-trash"></i>    
            </button>        
        </li>
        `


    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(arrayDeTarefas))

}

function deletarTarefa(index) {
    arrayDeTarefas.splice(index, 1)

    mostrarTarefas()

}

function addTask() {

    if(input.value){
        arrayDeTarefas.push({
            tarefa: input.value,
            status: false
        })
    
    }
    else{
        alert("Digite uma tarefa")
    }

   
    
    input.value = ""
    mostrarTarefas()
}

function concluirTarefa(index) {

    arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida

    mostrarTarefas()

}

function recarregarTarefas() {
    let minhasTarefas = localStorage.getItem("lista")

    if(minhasTarefas)
    arrayDeTarefas = JSON.parse(minhasTarefas)

    mostrarTarefas()

}

function addForEnter(teclas){

    if(teclas.key === "Enter"){
    addTask()
    }
    

}

button.addEventListener("click", addTask)

document.addEventListener("keypress", addForEnter)




