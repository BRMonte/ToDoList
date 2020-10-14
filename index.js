var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tarefas = [
  'Fazer cafe',
  'estudar JS',
  'Acessar comunidade'
];

function renderTarefas() {
  for(tarefa of tarefas) {
    var tarefaElement = document.createElement('li');
    var tarefaText = document.createTextNode(tarefa);

    tarefaElement.appendChild(tarefaText);
    listElement.appendChild(tarefaElement);
  }
}

renderTarefas();

function addTarefa() {
  var tarefaText = inputElement.value;

  tarefas.push(tarefaText);
  inputElement.value = ''; //makes the input box blank again
  renderTarefas();
}

buttonElement.onclick = addTarefa; // chama a função addTarefa qnd o botao é clicado
