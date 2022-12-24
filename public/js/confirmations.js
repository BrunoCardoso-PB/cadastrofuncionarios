
function confirmarExclusao(event, form){
    event.preventDefault();
    let decision = confirm("Você deseja excluir este cadastro?");
    if(decision){
        form.submit();
        alert("cadastro excluído com sucesso")
    }
}



function cadastroSucesso(){
    alert("Cadastro feito com sucesso!")
}