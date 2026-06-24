const form = document.getElementById('form-checagem');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let valorA = Number(campoA.value);
    let valorB = Number(campoB.value);

    if ( valorB > valorA ) {
    console.log("Tudo certo! Formulário válido.");
} else {
    console.log("Erro! B precisa ser maior que A.");
}
})