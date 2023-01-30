function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
}

//    Posso usar apenas toggle light acima ou if else abaixo
//    if(html.classList.contains('light')) {
//        html.classList.remove('light')
//    } else  {
//        html.classList.add('light')
//    }

//    Posso usar esse code para alterar a imagem quando o tema é alterado
//    const img = document.querySelector("#profile img")
//    if (html.classList.contains('light')) {
//        img.setAttribute('src', './assets/avatar.png')
//    } else {
//        img.setAttribute('src', './assets/avatar.png')