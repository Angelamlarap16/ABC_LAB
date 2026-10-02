const listaColores = ['green', 'blue', 'red'];
function cambiarColores() {
    const elementosH5 = document.querySelectorAll('h5');
    elementosH5.forEach(h5 => {
        const indiceAlAzar = Math.floor(Math.random() * listaColores.length);
        h5.style.color = listaColores[indiceAlAzar];
    });
}