    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const sobrenome = document.getElementById("sobrenome").value;
        const email = document.getElementById("email").value;
        const dataNascimento = document.getElementById("data").value;
        const genero = document.querySelector('input[name="genero"]:checked');
        const paisOrigem = document.getElementById("pais").value;
        const interesses = document.querySelectorAll('input[name="interesse"]:checked');
        const biografia = document.getElementById("biografia").value;

        if (!nome || !sobrenome || !email || !dataNascimento || !genero || !paisOrigem) {
            alert("Preencha todos os campos!");
            return;
        }
        const idade = new Date().getFullYear() - dataNascimento.getFullYear();
        if (idade<18) {
            alert("Você precisa ter 18 anos");
            return;
        }
        let interessesEscolhidos = [];
        interesses.forEach((interesse) => {
            interessesEscolhidos.push(interesse.value);
        });
        console.log("O formulário foi enviado!");
        form.reset();
    });