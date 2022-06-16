function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nas = window.document.getElementById('nas')
    var res = window.document.getElementById('msg')
    if (nas.value == 0 || nas.value > ano){
        window.alert('[ERRO] Confira os valores e tente novamente.')
    }else{
        var rad = window.document.getElementsByName('rad')
        var idade = ano - Number(nas.value)
        var genero = ''
        var img = window.document.getElementById('img')
        if (rad[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                img.src = 'imagens/foto-bebe-m.png'
            }else if (idade <= 25){
                img.src = 'imagens/foto-jovem-m.png'
            }else if(idade <= 40){
                img.src = 'imagens/foto-adulto-m.png'
            }else if(idade > 40){
                img.src = 'imagens/foto-idoso-m.png'
            }
        }else if (rad[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                img.src = 'imagens/foto-bebe-f.png'
            }else if (idade <= 25){
                img.src = 'imagens/foto-jovem-f.png'
            }else if(idade <= 40){
                img.src = 'imagens/foto-adulto-f.png'
            }else if(idade > 40){
                img.src = 'imagens/foto-idoso-f.png'
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos`
    }
}