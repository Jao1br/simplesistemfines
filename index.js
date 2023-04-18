

function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de ${vel} Km/h</p>`
    if (vel > 80){
        res.innerHTML += `<p> Você está <strong class="multa">MULTADO</strong> por execesso de velocidade!!</p>`
        alert('Você foi multado e foi adicionado 3 pontos na sua carteira')


    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
    
}



