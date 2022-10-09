function meuEscopo() {
    const form = document.querySelector('.form');

    // Previne que os dados sejam apagados durante o evento 'submit'
    // DEPRECATED
    // form.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     console.log('Enviado');
    // };

    // Previne que os dados sejam apagados durante o evento 'submit'
    let cont = 1;
    function recebeEventoForm(event) {
        event.preventDefault();
        console.log(`Formulário não foi enviado. ${cont}`);
        cont++;
    }
    form.addEventListener('submit', recebeEventoForm);
}

// ===================================================================
const pessoas = [];

function capturaForm() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(event) {
        event.preventDefault();
        
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        console.log(pessoas);
        resultado.innerHTML += `<p>Nome: ${nome.value} ${sobrenome.value}, 
                                Peso: ${peso.value}, Altura: ${altura.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}

capturaForm();