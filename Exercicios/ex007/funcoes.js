media = 7.4
function avaliar(){
    if (media < 6){
        return 'Reprovado!'
    }else{
        return 'Aprovado!'
    }
}
console.log(avaliar(media))