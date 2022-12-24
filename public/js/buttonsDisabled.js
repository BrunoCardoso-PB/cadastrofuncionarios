   /***botao cadastrar***/
    function toggleButtonCadastrar(){
        const nome = document.querySelector('#nome').value;
        const cep = document.querySelector('#cep').value;
        const endereco = document.querySelector('#logradouro').value;
        const bairro = document.querySelector('#bairro').value;
        const cidade = document.querySelector('#localidade').value;      
        const uf = document.querySelector('#uf').value;
        const funcao = document.querySelector('#funcao').value; 
        const cpf = document.querySelector('#cpf').value; 

        if((nome && cep && endereco && bairro && cidade && uf && funcao && (cpf.length > 10) && (cpf.length < 12))){
            document.querySelector('#btn-cadastrar').disabled = false;
            return
        }
        document.querySelector("#btn-cadastrar").disabled = true;
    }

  
/***Botao consultar***/

    function toggleButtonConsultar(){
        const cpf = document.querySelector('#cpf').value;
        if((cpf.length > 10) && (cpf.length < 12)){
            document.querySelector('#consultar').disabled = false;
            return
        }
        document.querySelector("#consultar").disabled = true;
    }
