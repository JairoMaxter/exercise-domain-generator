var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];
let dominio = ['.com', '.net', '.us', '.io'];
let contador = 0

function allcom(pronoun, adj, noun, dominio) {
    for (let p = 0; p < pronoun.length; p++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                for (let d = 0; d < dominio.length; d++){
                var domcombination = document.querySelector(`#p${contador}`);
                domcombination.innerHTML = `<p>www.${pronoun[p]}${adj[a]}${noun[n]}${dominio[d]}</p><p id='p${contador + 1}'></p>`;
                console.log(`www.${pronoun[p]}${adj[a]}${noun[n]}${dominio[d]}`)
                contador = contador +1
                }
            }
        }
    }
}

allcom(pronoun, adj, noun, dominio)