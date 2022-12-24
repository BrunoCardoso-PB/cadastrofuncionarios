const cep = document.querySelector("#cep");
cep.addEventListener("change", getAllPosts);

async function getAllPosts() {
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default",
    };
    try {
        const cepSelecionado = document.querySelector("#cep").value;
        const response = await fetch(
            `https://viacep.com.br/ws/${cepSelecionado}/json/`,
            options
        );
        const data = await response.json();
        for (const campo in data) {
            if (document.querySelector("#" + campo)) {
                document.querySelector("#" + campo).value = data[campo];
            }
        }
    } catch (erro) {
        alert('Digite um CEP válido')
    }
}