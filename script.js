function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora =  teste para ver como está
    var mi = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${mi} minutos`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'img/fotomanha.png'
        document.body.style.background = '#fee854'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!!
        img.src = 'img/fototarde.png'
        document.body.style.background = '#d8c9bc'
    } else {
        // Boa noite!!!
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#15273f'
    }
}
