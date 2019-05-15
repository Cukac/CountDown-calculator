let output = 0;
let input = 10;
let timeOUT = 1;
timeOUT = 1500/input;
var pocetak = new Date();

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
        console.log("outP: " + outP);
        return outP;
    })();
    (function () {
        let rez = counting(inP, outP);
        inP = rez[0];
        console.log("inP: " + inP);
        return inP;
    })();
    var mytimer = setTimeout(function(){countItDown(inP, outP)}, timeOUT);
    
    if (inP < 1) {
        var kraj = new Date();
        let c = kraj - pocetak;
		console.log("Output: mytimer -> c", c);
        
        clearTimeout(mytimer);
    };
    
};

countItDown(input, output);