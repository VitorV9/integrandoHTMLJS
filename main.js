const form = document.getElementById('form-checagem');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let valorA = Number(campoA.value);
    let valorB = Number(campoB.value);

    const containerMensagemSucesso = document.querySelector('.sucess-message');
    const containerMensagemErro = document.querySelector('.error-message');


    if ( valorB > valorA ) {
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
} else {
        containerMensagemSucesso.style.display = 'none';
        containerMensagemErro.style.display = 'block';
}
})