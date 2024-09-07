function gerarMensagem() {
    // Pega todos os checkboxes
    let checkboxes = document.querySelectorAll('input[name="atividade"]');
    let feitos = [];
    let naoFeitos = [];

    // Percorre os checkboxes para verificar quais estão marcados
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            feitos.push(checkbox.value);
        } else {
            naoFeitos.push(checkbox.value);
        }
    });

    // Organiza a mensagem em listas
    let mensagem = "<h4>Atividades Feitas:</h4><ul>";
    if (feitos.length > 0) {
        feitos.forEach(function(atividade) {
            mensagem += "<li>" + atividade + "</li>";
        });
    } else {
        mensagem += "<li>Nenhuma atividade foi concluída.</li>";
    }
    mensagem += "</ul>";

    mensagem += "<h4>Atividades Não Feitas:</h4><ul>";
    if (naoFeitos.length > 0) {
        naoFeitos.forEach(function(atividade) {
            mensagem += "<li>" + atividade + "</li>";
        });
    } else {
        mensagem += "<li>Todas as atividades foram concluídas.</li>";
    }
    mensagem += "</ul>";

    // Exibe a mensagem na página com listas
    document.getElementById("resultadoMensagem").innerHTML = mensagem;
}
