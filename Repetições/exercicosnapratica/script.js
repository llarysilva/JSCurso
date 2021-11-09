function contar() {
    var ini = document.getElementById('ini')
    var mei = document.getElementById('mei')
    var fim = document.getElementById('fim')
    var res = document.getElementById('res')
    if (ini.value.length == 0 || mei.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossível contar, verfique se nenhum item ficou vazio!'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var m = Number(mei.value)
        var f = Number(fim.value)
     
        if ( f <= 0) {
            window.alert('Passo inválido! Considerado passo 1')
            f = 1
        }
    } if (i < m) {
        //Contagem crescente
        for(var c = i; c <= m; c += f) {
            res.innerHTML += `${c} \u{1f449} ` 
        }  
    } else {
        //Contagem regressiva
        for(var c = i; c >= m; c -= f) {
            res.innerHTML +=  `${c} \u{1f449}`
        }
    }res.innerHTML +=   '\u{1f3c1}'

}