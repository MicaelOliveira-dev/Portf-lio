const titulo = document.querySelector('span')
typewriter(titulo)

function typewriter(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() =>
        element.innerHTML += letra , 100 * i)
    });
}

