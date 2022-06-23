<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" class="href">
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body onload="initialyze()">
    <div class="conteudo">
        <div class="titulo">
            <h2>Lista de Tarefas</h2>
        </div>
        <div class="topo">
            <input type="text" id="inputNovaTarefa" placeholder="Adicione uma nova tarefa">
            <input type="text" id="inputDescricaoTarefa" placeholder="Adicione uma descrição">
            <input type="date" id="inputData" placeholder="Data de entrega">
            <button id="btnAddTarefa" onclick="saveTarefa()">
                <i class="fa fa-plus"></i>
            </button>
        </div>

        <ul id="listaTarefas">
            
        </ul>
    </div>

    <div id="janelaEdicao">
        <button id="janelaEdicaoBtnFechar">
            <li class="fa fa-remove fa-2x"></li>
        </button>
        <h2 id="idTarefaEdicao">#1021</h2>
        <hr>
        
        <form>
        <div class="frm-linha">
                <label for="nome">Id</label>
                <input type="text" id="inputTarefaIdEdicao" disabled>
            </div>
            <div class="frm-linha">
                <label for="nome">Nome</label>
                <input type="text" id="inputTarefaNomeEdicao">
            </div>
            <div class="frm-linha">
                <label for="descricao">Descrição</label>
                <input type="text" id="inputTarefaDescricaoEdicao">
            </div>
            <div class="frm-linha">
                <label for="data">Data de Entrega</label>
                <input type="date" id="inputDataEdicao">
            </div>
            <div class="frm-linha">
                <button id="btnAtualizarTarefa" onclick="saveEdicao()">Salvar</button>
            </div>
        </form>
        
    </div>
    <div id="janelaEdicaoFundo"></div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script src="/js/tarefas.js"></script>
</body>
</html>