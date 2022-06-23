let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let inputDescricaoTarefa = document.querySelector('#inputDescricaoTarefa');
let inputData = document.querySelector('#inputData');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefas = document.querySelector('#listaTarefas');
let janelaEdicao = document.querySelector('#janelaEdicao');
let janelaEdicaoFundo = document.querySelector('#janelaEdicaoFundo');
let janelaEdicaoBtnFechar = document.querySelector('#janelaEdicaoBtnFechar');
let btnAtualizarTarefa = document.querySelector('#btnAtualizarTarefa');
let idTarefaEdicao = document.querySelector('#idTarefaEdicao');
let inputTarefaNomeEdicao = document.querySelector('#inputTarefaNomeEdicao');
let inputTarefaDescricaoEdicao = document.querySelector('#inputTarefaDescricaoEdicao');
let inputDataEdicao = document.querySelector('#inputDataEdicao');

inputNovaTarefa.addEventListener('keypress', (e) => {

    if (e.keyCode == 13) {
        let tarefa = {
            nome: inputNovaTarefa.value,
            descricao: inputDescricaoTarefa.value,
            data: inputData.value,
            id: gerarId(),
        }
        // TODO:: Adicionar a tarefa ao HTML
        getTarefas();
    }

});

janelaEdicaoBtnFechar.addEventListener('click', (e) => {
    alternarJanelaEdicao();
});

btnAddTarefa.addEventListener('click', (e) => {

    let tarefa = {
        nome: inputNovaTarefa.value,
        descricao: inputDescricaoTarefa.value,
        data: inputData.value,
        id: gerarId(),
    }
    // TODO:: Adicionar a tarefa ao HTML
    getTarefas();
})

btnAtualizarTarefa.addEventListener('click', (e) => {
    e.preventDefault();

    let idTarefa = idTarefaEdicao.innerHTML.replace('#', '');

    let tarefa = {
        nome: inputTarefaNomeEdicao.value,
        descricao: inputTarefaDescricaoEdicao.value,
        data: inputDataEdicao.value,
        id: idTarefa,
    }

    let tarefaAtual = document.getElementById('' + idTarefa + '');

    if (tarefaAtual) {
        let li = criarTagLi(tarefa);
        listaTarefas.replaceChild(li, tarefaAtual);
        alternarJanelaEdicao();
    } else {
        alert('Elemento HTML não encontrado!');
    }

});

function initialyze() {
    getTarefas();
}

function gerarId() {
    return Math.floor(Math.random() * 3000);
}

function getTarefas() {
    $.ajax({
        type: "GET",
        url: "/index",
        success: function (data) {
            console.log(data);
            // $("listaTarefas").innerHTML  = "";
            const lista = document.getElementById('listaTarefas');
            lista.innerHTML = "";
            if (data.length > 0) {
                data.forEach(element => {
                    let li = criarTagLi(element);

                    listaTarefas.appendChild(li);
                    inputNovaTarefa.value = '';
                    inputDescricaoTarefa.value = '';
                    inputData.value = '';
                });
                // let li = criarTagLi(tarefa);
                // listaTarefas.appendChild(li);
                // inputNovaTarefa.value = '';
                // inputDescricaoTarefa.value = '';
                // inputData.value = '';
            } else {
                console.log(error);
            }
        },
        error: function (error) {
            alert(`Error ${error}`);
        }
    })
}

function criarTagLi(tarefa) {

    let li = document.createElement('li');
    li.id = tarefa.id;

    let span1 = document.createElement('span');
    span1.classList.add('textoTarefa');
    span1.innerHTML = tarefa.name;
    let span2 = document.createElement('span');
    span2.classList.add('descricaoTarefa');
    span2.innerHTML = tarefa.description;
    let span3 = document.createElement('span');
    span3.classList.add('dataTarefa');
    span3.innerHTML = tarefa.date;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', 'editar(' + tarefa.id + ')');

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir(' + tarefa.id + ')');

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    li.appendChild(div);
    return li;
}

function saveTarefa() {
    const nome = document.getElementById('inputNovaTarefa').value;
    const descricao = document.getElementById('inputDescricaoTarefa').value;
    const data = document.getElementById('inputData').value;
    $.ajax({
        type: "POST",
        url: "/index",
        data: {
            name: nome,
            description: descricao,
            date: data,
        },
        //headers: {
        //    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //},
        success: function (data) {
            console.log(data);
            getTarefas();
        },
        error: function (error) {
            alert(`Error ${error}`);
        }
    })
}

function editar(idTarefa){
    let li = document.getElementById('' + idTarefa + '');
    console.log(li.innerText)
    console.log(li.innerText.search('\n'));
    const arrar = li.innerText.split('\n');
    console.log(arrar);
    const [name, description, date] = arrar;
        if(li){
            inputTarefaIdEdicao.value = idTarefa;
            idTarefaEdicao.innerHTML = '#' + idTarefa;
            inputTarefaNomeEdicao.value = name;
            inputTarefaDescricaoEdicao.value = description;
            inputDataEdicao.value = date;
            alternarJanelaEdicao();
        } else {
            alert('Elemento HTML não encontrado!');
        }
}

function saveEdicao() {
    const id = document.getElementById('inputTarefaIdEdicao').value;
    const nome = document.getElementById('inputTarefaNomeEdicao').value;
    const descricao = document.getElementById('inputTarefaDescricaoEdicao').value;
    const data = document.getElementById('inputDataEdicao').value;
    $.ajax({
        type: "PUT",
        url: `/index/${id}`,
        data: {
            name: nome,
            description: descricao,
            date: data,
        },
        //headers: {
        //    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        //},
        success: function (data) {
            console.log(data);
            getTarefas();
        },
        error: function (error) {
            alert(`Error ${error}`);
        }
    })
}

function excluir(idTarefa) {
    $.ajax({
        type: "DELETE",
        url: `/index/${idTarefa}`,
        // headers: {
        //     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        // },
        success: function (data) {
            console.log(data);
            getTarefas();
        },
        error: function (error) {
            alert(`Error ${error}`);
        }
    })
}

function alternarJanelaEdicao() {
    janelaEdicao.classList.toggle('abrir');
    janelaEdicaoFundo.classList.toggle('abrir');
}