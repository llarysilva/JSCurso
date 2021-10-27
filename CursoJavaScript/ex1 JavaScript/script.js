function Verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || fano.value > ano){ 
window.alert('[ERRO] Verifque os dados abaixo, e tente novamente')
} else { 
 var fsex = document.getElementsByName('radsex')
 var idade = ano - Number(fano.value)
 var gênero = ''
 var img = document.createElement ('img')
 img.setAttribute('id', 'foto')

 if (fsex[0].checked) {
     gênero = ' homem'
    if ( idade >=0 && idade < 15) {
        img.setAttribute('src', "bebemasculino.jpg")


    } else if (idade < 21) {
        img.setAttribute('src', "jovemo.jpg")

    }
     else if (idade < 50) {
        img.setAttribute('src', "adulto.jpg")

    }else 
    {
        img.setAttribute('src', "velho.jpg")
    }

 }
 else if (fsex[1].checked) {
     gênero = 'Mulher'
     if ( idade >=0 && idade < 15) {
        img.setAttribute('src', "criancaa.jpg")

    } else if (idade < 21) { 
        img.setAttribute('src', "jovema.jpg")
    }
     else if (idade < 50) {
        img.setAttribute('src', "adulta.jpg")
    }else 
    {
        img.setAttribute('src', "velha.jpg")
    }
 }
 res.style.textAlign = 'center'
 res.innerHTML = `Detectamos ${gênero} com ${idade} anos `
 res.appendChild (img)
}
}
   