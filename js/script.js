const API_KEY = "42ac586c40aa4d0992995d1a6320e5de";
let config = {
    method: "GET"
}

let tela = document.getElementById('quadro')
let mostra = document.getElementById('carregar')

function mostrarNaTela(arrayNoticia) {
    arrayNoticia.forEach((textoNoticia) => {
        let noticia = `<div class="col-lg-4">
        <div id="note" class="card" style="width: 23rem;">
            <img src="${textoNoticia.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title text-center">${textoNoticia.title}</h3>
                <p class="card-text text-justify">${textoNoticia.description}</p>
                <a href="${textoNoticia.url}" class="btn btn-warning">Ver Noticia</a>
            </div>
        </div>
    </div>`
    tela.insertAdjacentHTML('beforeend', noticia);
    })
}

mostra.onclick = () => {
    let resposta = fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=" + API_KEY, config)
        .then((resposta) => {
            return resposta.json()
        })
        .then((json) => {
            mostrarNaTela(json.articles)
        })
}
