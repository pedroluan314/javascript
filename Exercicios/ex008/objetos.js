var amigo = {nome: 'josé',
idade: 34,
peso: 79.6,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}
}
amigo.engordar(5)
console.log(amigo.peso)