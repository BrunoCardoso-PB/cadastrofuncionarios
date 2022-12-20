   /***botao cadastrar***/
   function toggleButtonCadastrar(){
        const nome = document.querySelector('#nome').value;
        const cpf = document.querySelector('#cpf').value;
        const bairro = document.querySelector('#bairro').value;
        const cidade = document.querySelector('#cidade').value;

        if(nome && cpf && bairro && cidade){
            document.querySelector('#deletar').disabled = false;
            return
        }
        document.querySelector("#deletar").disabled = true;
    }
/***Botao consultar***/
    function toggleButtonConsultar(){
        const cpf = document.querySelector('#cpf').value;
        if(cpf.length > 10){
            document.querySelector('#consultar').disabled = false;
            return
        }
        document.querySelector("#consultar").disabled = true;
    }
