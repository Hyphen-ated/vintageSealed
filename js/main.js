
var btn = document.getElementById("generate");
btn.onclick = function() {
    var howmany = document.getElementById("howmany").value;
    var len = vintage_cards.length;
    var out = "";
    for(var i = 0; i < howmany; ++i) {
        var idx = Math.floor(Math.random() * len);
        out += "1x " + vintage_cards[idx] + "\n";
    }
    document.getElementById("pool").value = out;
}