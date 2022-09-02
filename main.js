const options ={
    method: "GET",
    mode: "cors",
    caches: "default"
}
const cep = document.getElementById("cep");

//chamando a variável
// blur significa sair do campo
cep.addEventListener("blur", ()=>{
    let cepValue = document.getElementById("cep").value
    

    //chamando o fetch
    //pegando o valor do json e colocando nos campos do html
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`, options).then((resposta) =>{
        resposta.json().then(data =>{
            document.getElementById("bairro").value = data.bairro
            document.getElementById("ddd").value = data.ddd
            document.getElementById("ibge").value = data.ibge
            document.getElementById("localidade").value = data.localidade
            document.getElementById("logradouro").value = data.logradouro
            document.getElementById("uf").value = data.uf
            document.getElementById("siafi").value = data.siafi
        })
    })
})
// pegando as coisas que estão no campo e colocando em variáveis quando clicar em "enviar"
function enviar(){
    let bairro = document.getElementById("bairro").value
    let ddd = document.getElementById("ddd").value
    let ibge = document.getElementById("ibge").value
    let localidade = document.getElementById("localidade").value
    let logradouro = document.getElementById("logradouro").value
    let uf = document.getElementById("uf").value
    let siafi = document.getElementById("siafi").value

    // transformando as variáveis obtidas nos campos em JSON
    let json = {
        "bairro": bairro,
        "ddd": ddd,
        "ibge": ibge,
        "localidade": localidade,
        "logradouro": logradouro,
        "uf": uf,
        "siafi": siafi
    }
    console.log(json)
}