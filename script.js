document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    const inputs = document.querySelectorAll("input");

    const restaurarDados = () => {
        inputs.forEach(input => {
            const valorSalvo = localStorage.getItem(input.id);
            if (valorSalvo) {
                input.value = valorSalvo;
            }
        });
    };

    const salvarDados = (id, valor) => {
        localStorage.setItem(id, valor);
    };

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            salvarDados(input.id, input.value);
        });
    });

    const campoCep = document.getElementById("cep");

    campoCep.addEventListener("blur", () => {
        const cep = campoCep.value.replace(/\D/g, "");

        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(res => res.json())
                .then(dados => {
                    if (dados.erro) {
                        alert("CEP não encontrado.");
                        return;
                    }

                    document.getElementById("logradouro").value = dados.logradouro;
                    document.getElementById("bairro").value = dados.bairro;
                    document.getElementById("cidade").value = dados.localidade;
                    document.getElementById("estado").value = dados.uf;

                    salvarDados("logradouro", dados.logradouro);
                    salvarDados("bairro", dados.bairro);
                    salvarDados("cidade", dados.localidade);
                    salvarDados("estado", dados.uf);

                    document.getElementById("numero").focus();
                })
                .catch(() => alert("Erro ao buscar CEP."));
        }
    });

    restaurarDados();
});