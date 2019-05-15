//
// definiranje HTML elemenata
//
let submit = document.getElementById("subButton");
console.log("Output: submit", submit);
let input = document.getElementById("startingB");
console.log("Output: input", input);
let output = document.getElementById("endingB");
console.log("Output: output", output);
let amount = 0;
let total = 0;
//
// prebrojavanje
//
let timeOUT = 1;


function countItDown(inP, outP) {
    function counting(inP, outP) {
        outP++;
        inP--;
        if (inP < 1) {
            outP += inP;
            inP = 0;
            clearTimeout(mytimer);
        };
        return [inP, outP];
    };
    (function () {
        let rez = counting(inP, outP);
        outP = rez[1];
        output.innerHTML = outP;
        return outP;
    })();
    (function () {
        let rez = counting(inP, outP);
        inP = rez[0];
        input.innerHTML = inP;
        return inP;
    })();
    var mytimer = setTimeout(function(){countItDown(inP, outP)}, timeOUT);
    
    if (inP < 1) {
        clearTimeout(mytimer);
    };
    
};
//
// funkcija poziva
//

function callCount() {
    countItDown(amount, total);
}

//
// submit button
//
submit.addEventListener("click", function() {
    amount = document.getElementById("numImput").value;    
    input.innerHTML = amount;
    output.innerHTML = 0;
    timeOUT = 1500/amount;
    callCount();
});


