var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

function allcom(pronoun, adj, noun) {
    for (let p = 0; p < pronoun.length; p++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                var domcombination = document.querySelector("#domcombination");
                domcombination.innerHTML = `<h1 id='${p + a + n}'>www.${pronoun[p]}${adj[a]}${noun[n]}.com</h1>`;
                console.log(`www.${pronoun[p]}${adj[a]}${noun[n]}.com`)
            }
        }
    }
}

allcom(pronoun, adj, noun)