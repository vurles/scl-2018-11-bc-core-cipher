document.getElementById('Encriptar').addEventListener('click', (event) => {
    event.preventDefault();
    let texto = document.getElementById('rescate').value;
    let desplazo = document.getElementById('seguridad').value;
    document.getElementById('nuevoTexto').innerHTML=window.cipher.encode(texto, desplazo);
})


document.getElementById('Descencriptar').addEventListener('click', (event) => {
    event.preventDefault();
    let cajaDeco = document.getElementById('rescate').value;
    let desplazoDeco = document.getElementById('seguridad').value;
    document.getElementById('nuevoTexto').innerHTML=window.cipher.decode(cajaDeco, desplazoDeco);

})

document.getElementById('limpiar').addEventListener('click', (event) => {

    location.reload();

})