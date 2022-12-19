   
   function toggleButton(){
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
