var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var tarefas = [
  'Fazer cafe',
  'estudar JS',
  'Acessar comunidade'
];

function renderTarefas() {

  //.innerHTML pega todo o html dentro do elemento.//essa linha exclui a lista de tarefas ja existente ao add uma nova. assim nao há repetição
  listElement.innerHTML = '';

  for(tarefa of tarefas) {
    var tarefaElement = document.createElement('li');
    var tarefaText = document.createTextNode(tarefa);

    //cria o link que exclui a tarefa
    var linkElement = document.createElement('a'); //cria o elemento HTML <a> e guarda na variavel
    var linkText = document.createTextNode('Excluir'); //cria e armazena o texto que quero no elemento <a>
    linkElement.appendChild(linkText); //embute o texto dentro do elemento
    linkElement.setAttribute('href', '#'); //cria atributo href p q <a> seja um link

    // como tarefa é uma string no array tarefas, .indexOf permite descobrir qual o seu index
    var pos = tarefas.indexOf(tarefa);
    linkElement.setAttribute('onclick', 'deleteTarefa('+ pos +')');

    tarefaElement.appendChild(tarefaText);
    tarefaElement.appendChild(linkElement); //add o botao de excluir a cada tarefa que aparece

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

 // chama a função addTarefa qnd o botao é clicado
buttonElement.onclick = addTarefa;

//função receberá a posição do elemento no array tarefas como argumento
function deleteTarefa(pos) {
  tarefas.splice(0, 1);
  renderTarefas();
};
