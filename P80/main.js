var listaNomes=[]

function enviar(){
    var nomesInserido = document.getElementById("input1").value
    console.log(nomesInserido)
    document.getElementById("input1").value = ""
    listaNomes.push(nomesInserido)
    document.getElementById("display").innerHTML = listaNomes
}
function mostrar(){
    var mostrarNomes = listaNomes.join("</br>")
    document.getElementById("p1").innerHTML = mostrarNomes
}
function organizar(){
    listaNomes.sort()
    document.getElementById("nomesOrg").innerHTML = listaNomes
}
function pesquisar(){
    var pesquisar =document.getElementById("input2").value
    var pesquisados = 0
    for (let index = 0; index < listaNomes.length; index++) {
        if (pesquisar == listaNomes[index]) {
            pesquisados+=1

        }
    }
    document.getElementById("p2").innerHTML = "nome encontrado " + pesquisados + " vezes"
}

