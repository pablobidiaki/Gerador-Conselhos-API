function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(){
    data = fazGet("https://api.adviceslip.com/advice")
    resultado = JSON.parse(data)
}

function criarConselhos(){
    const titulo = document.getElementById("title")
    const content = document.getElementById("content")
    titulo.innerHTML = 'ADVICE #' + resultado.slip.id
    content.innerHTML = '"' +resultado.slip.advice + '"'
}

function mudarConselho() {
    main()
    criarConselhos()
}

main()
criarConselhos()