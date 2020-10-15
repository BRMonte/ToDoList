var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//localStorage.getItem() para recuperar o valor do par chave: valor;
// JSON.parse() analisa uma string JSON e constrói o valor ou um objeto JS
// || [] é usado como apoio. Se o localStorage nao retornar um valor iterável, tarefas nao poderá ser submetido ao metodo FOR. Então adota-se essa prática || [] para prevenir erros.
var tarefas = JSON.parse(localStorage.getItem('list_tarefas')) || [];

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
  saveToStorage();
}

 // chama a função addTarefa qnd o botao é clicado
buttonElement.onclick = addTarefa;

//função receberá a posição do elemento no array tarefas como argumento
function deleteTarefa(pos) {
  tarefas.splice(0, 1);
  renderTarefas();
  saveToStorage();
};

//salva a lista de tarefas no local Storage
//local storage é um modo simplista de salvar localmente.
//localStorage.setItem() para criar um novo par de chave: valor (que será uma string);
//JSON usado p converter o que seria uma coleção de strings (tarefas) numa estrutura q possa ser acessada d forma mais sofisticada
function saveToStorage() {
  localStorage.setItem('list_tarefas', JSON.stringify(tarefas));
};
