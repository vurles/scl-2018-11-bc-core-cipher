document.getElementById('Encriptar').addEventListener('click', (event) => {
    event.preventDefault();
    let texto = document.getElementById('rescate').value;
    let desplazo = document.getElementById('seguridad').value;
    document.getElementById('nuevoTexto').innerHTML=window.cipher.encode(texto, desplazo);
})


document.getElementById('Descencriptar').addEventListener('click', (event) => {
    event.preventDefault();
    let textoDescifrar = document.getElementById('rescate').value;
    let desplazoDescifrar = document.getElementById('seguridad').value;
    document.getElementById('nuevoTexto').innerHTML=window.cipher.decode(textoDescifrar, desplazoDescifrar);

})

document.getElementById('limpiar').addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();

})