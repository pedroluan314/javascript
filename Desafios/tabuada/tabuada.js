function gerar() {
    var ntab = window.document.getElementById('ntab')
    var res = window.document.getElementById('res')
    var msg = window.document.getElementById('msg')
    if (ntab.value == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        msg.innerHTML = `A tabuada do número ${ntab.value} é: `
        res.innerHTML = `${ntab.value} x 1 = ${ntab.value * 1}<br>
        ${ntab.value} x 2 = ${ntab.value * 2}<br>
        ${ntab.value} x 3 = ${ntab.value * 3}<br>
        ${ntab.value} x 4 = ${ntab.value * 4}<br>
        ${ntab.value} x 5 = ${ntab.value * 5}<br>
        ${ntab.value} x 6 = ${ntab.value * 6}<br>
        ${ntab.value} x 7 = ${ntab.value * 7}<br>
        ${ntab.value} x 8 = ${ntab.value * 8}<br>
        ${ntab.value} x 9 = ${ntab.value * 9}<br>
        ${ntab.value} x 10 = ${ntab.value * 10}<br>`
    }
}