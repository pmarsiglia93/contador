function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){        
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p<=0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if (i<f){
            //contagem crescente
            for(var c = i; c<=f; c +=p){
            res.innerHTML += `${c} \u{1f603}`
            }           
        
        } else{
            //contagem regressiva
            for (c = i; c>=f; c-= p){
                res.innerHTML += `${c} \u{1f603}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}
