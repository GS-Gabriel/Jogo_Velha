// ----------------- Atribuição ----------------------
var player = "sage"
var playerX = player
var playerO = "cypher"
var numJog = 0
var finalizacao  = false
const Player1 = localStorage.getItem('player1')
const Player2 = localStorage.getItem('player2')
const timer = document.querySelector('.timer')

if (Player2 != "CPU") {
    playerO = "sova"
}

window.onload = () => {
    startTimer()
    loadGame()
}

const startTimer = () => {

    this.loop = setInterval(() => {
      const currentTime = +timer.innerHTML;
      timer.innerHTML = currentTime + 1;
    }, 1000);
  
}

function loadGame() {
    document.getElementById('p1').innerHTML = Player1
    document.getElementById('p2').innerHTML = Player2
}

// ----------------- JOGO -----------------------------
function checkjogo(id) {
    // ---------------- Valores -----------------------
    var partida = localStorage.getItem('partida')

    var cpu = localStorage.getItem('cpu')
    var opt = verificaSrc(id)

    if(finalizacao) {
        return false
    }

    if (opt == "transp.png") {
        document.getElementById(id).src = "../img/" + player + ".png"

        numJog++
        if (winchek()) {
            finalizacao = true
            if (partida != "unico") {
                document.getElementById('pt').disabled = false
                    if (partida == "2") {
                        document.getElementById('pt').disabled = true
                    }
                    partida = parseInt(partida)
                    partida++
                    localStorage.setItem('partida', partida)
            }
            
            document.getElementById('h2').innerHTML = "Fim de jogo " + player + " venceu a partida!"
            return false
        }
        if (numJog >= 9) {
            finalizacao = true
            if (partida != "unico") {
                document.getElementById('pt').disabled = false
                    if (partida == "2") {
                        document.getElementById('pt').disabled = true
                    }
                    partida = parseInt(partida)
                    partida++
                    localStorage.setItem('partida', partida)
            }

            document.getElementById('h2').innerHTML = "Fim de jogo, deu velha!"
            return false
        }
        if (player == playerX) {
            player = playerO
        } else {
            player = playerX
        }
    }
    if (cpu == "true" && player == "cypher") {
        setTimeout(() => {checkjogo(jogoDoPc())}, 500)
    }
    function jogoDoPc() {
        return 'c' + Math.floor((Math.random() * 9) + 1)
    }
}
function verificaSrc(id) {
    var file = document.getElementById(id).src
    return file.substring(file.length - 10, file.length)
}
function winchek() {
    if (((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png") ||
        ((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png") ||
        ((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png") ||
        ((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png") ||
        ((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png") ||
        ((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png") ||
        ((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png") ||
        ((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png")) {
        return true
    }
    return false
}
