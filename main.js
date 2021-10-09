function domsBuilder() {
    var pronoun = ['the', 'our'];
    var adj = ['great', 'big'];
    var noun = ['jogger', 'racoon'];
    const doms = [];
    for (let p = 0; p < pronoun.length; p++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                const pronoun = pronoun[p];
                const adj = adj[a];
                const noun = noun[n]
                
                doms.push({ pronoun, adj, noun });
            }
        }
    }
    return doms;
}

function randomCard(cards) {
    const random = Math.floor(Math.random() * 51);
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
    let entity;
    cardSuit === "Diamonds" ? (entity = "&diams;") : (entity = "&" + cardSuit.toLowerCase() + ";");
    const card = document.createElement("div");
    card.classList.add("card", cardSuit.toLowerCase());
    card.innerHTML =
        '<span class="card-value-suit top">' + entity + '</span>' +
        '<span class="card-suit">' + cardValue + '</span>' +
        '<span class="card-value-suit bot">' + entity + '</span>';
    document.body.appendChild(card);
}