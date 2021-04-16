window.onload =  chrome.storage.sync.get("firstPhraseStorage", function (obj) {
    firstPhrase = obj.firstPhraseStorage;
    document.getElementById("1PhraseInput").value = firstPhrase;
});
window.onload = chrome.storage.sync.get("firstKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.firstKeybindStorage);
    firstKeybind = obj.firstKeybindStorage;
    document.getElementById("1KeybindInput").value = firstKeybind;
});

window.onload =  chrome.storage.sync.get("secondPhraseStorage", function (obj) {
    secondPhrase = obj.secondPhraseStorage;
    document.getElementById("2PhraseInput").value = secondPhrase;
});
window.onload = chrome.storage.sync.get("secondKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.secondKeybindStorage);
    secondKeybind = obj.secondKeybindStorage;
    document.getElementById("2KeybindInput").value = secondKeybind;
});

window.onload =  chrome.storage.sync.get("thirdPhraseStorage", function (obj) {
    thirdPhrase = obj.thirdPhraseStorage;
    document.getElementById("3PhraseInput").value = thirdPhrase;
});
window.onload = chrome.storage.sync.get("thirdKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirdKeybindStorage);
    thirdKeybind = obj.thirdKeybindStorage;
    document.getElementById("3KeybindInput").value = thirdKeybind;
});

window.onload =  chrome.storage.sync.get("fourthPhraseStorage", function (obj) {
    fourthPhrase = obj.fourthPhraseStorage;
    document.getElementById("4PhraseInput").value = fourthPhrase;
});
window.onload = chrome.storage.sync.get("fourthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.fourthKeybindStorage);
    fourthKeybind = obj.fourthKeybindStorage;
    document.getElementById("4KeybindInput").value = fourthKeybind;
});

window.onload =  chrome.storage.sync.get("fifthPhraseStorage", function (obj) {
    fifthPhrase = obj.fifthPhraseStorage;
    document.getElementById("5PhraseInput").value = fifthPhrase;
});
window.onload = chrome.storage.sync.get("fifthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.fifthKeybindStorage);
    fifthKeybind = obj.fifthKeybindStorage;
    document.getElementById("5KeybindInput").value = fifthKeybind;
});

window.onload =  chrome.storage.sync.get("sixthPhraseStorage", function (obj) {
    sixthPhrase = obj.sixthPhraseStorage;
    document.getElementById("6PhraseInput").value = sixthPhrase;
});
window.onload = chrome.storage.sync.get("sixthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.sixthKeybindStorage);
    sixthKeybind = obj.sixthKeybindStorage;
    document.getElementById("6KeybindInput").value = sixthKeybind;
});

window.onload =  chrome.storage.sync.get("seventhPhraseStorage", function (obj) {
    seventhPhrase = obj.seventhPhraseStorage;
    document.getElementById("7PhraseInput").value = seventhPhrase;
});
window.onload = chrome.storage.sync.get("seventhKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.seventhKeybindStorage);
    seventhKeybind = obj.seventhKeybindStorage;
    document.getElementById("7KeybindInput").value = seventhKeybind;
});

window.onload =  chrome.storage.sync.get("eighthPhraseStorage", function (obj) {
    eighthPhrase = obj.eighthPhraseStorage;
    document.getElementById("8PhraseInput").value = eighthPhrase;
});
window.onload = chrome.storage.sync.get("eighthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.eighthKeybindStorage);
    eighthKeybind = obj.eighthKeybindStorage;
    document.getElementById("8KeybindInput").value = eighthKeybind;
});

window.onload =  chrome.storage.sync.get("ninthPhraseStorage", function (obj) {
    ninthPhrase = obj.ninthPhraseStorage;
    document.getElementById("9PhraseInput").value = ninthPhrase;
});
window.onload = chrome.storage.sync.get("ninthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.ninthKeybindStorage);
    ninthKeybind = obj.ninthKeybindStorage;
    document.getElementById("9KeybindInput").value = ninthKeybind;
});

window.onload =  chrome.storage.sync.get("tenthPhraseStorage", function (obj) {
    tenthPhrase = obj.tenthPhraseStorage;
    document.getElementById("10PhraseInput").value = tenthPhrase;
});
window.onload = chrome.storage.sync.get("tenthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.tenthKeybindStorage);
    tenthKeybind = obj.tenthKeybindStorage;
    document.getElementById("10KeybindInput").value = tenthKeybind;
});

window.onload =  chrome.storage.sync.get("eleventhPhraseStorage", function (obj) {
    eleventhPhrase = obj.eleventhPhraseStorage;
    document.getElementById("11PhraseInput").value = eleventhPhrase;
});
window.onload = chrome.storage.sync.get("eleventhKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.eleventhKeybindStorage);
    eleventhKeybind = obj.eleventhKeybindStorage;
    document.getElementById("11KeybindInput").value = eleventhKeybind;
});

window.onload =  chrome.storage.sync.get("twelfthPhraseStorage", function (obj) {
    twelfthPhrase = obj.twelfthPhraseStorage;
    document.getElementById("12PhraseInput").value = twelfthPhrase;
});
window.onload = chrome.storage.sync.get("twelfthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twelfthKeybindStorage);
    twelfthKeybind = obj.twelfthKeybindStorage;
    document.getElementById("12KeybindInput").value = twelfthKeybind;
});

window.onload =  chrome.storage.sync.get("thirteenthPhraseStorage", function (obj) {
    thirteenthPhrase = obj.thirteenthPhraseStorage;
    document.getElementById("13PhraseInput").value = thirteenthPhrase;
});
window.onload = chrome.storage.sync.get("thirteenthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirteenthKeybindStorage);
    thirteenthKeybind = obj.thirteenthKeybindStorage;
    document.getElementById("13KeybindInput").value = thirteenthKeybind;
});

window.onload =  chrome.storage.sync.get("fourteenthPhraseStorage", function (obj) {
    fourteenthPhrase = obj.fourteenthPhraseStorage;
    document.getElementById("14PhraseInput").value = fourteenthPhrase;
});
window.onload = chrome.storage.sync.get("fourteenthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.fourteenthKeybindStorage);
    fourteenthKeybind = obj.fourteenthKeybindStorage;
    document.getElementById("14KeybindInput").value = fourteenthKeybind;
});

window.onload =  chrome.storage.sync.get("fifteenthPhraseStorage", function (obj) {
    fifteenthPhrase = obj.fifteenthPhraseStorage;
    document.getElementById("15PhraseInput").value = fifteenthPhrase;
});
window.onload = chrome.storage.sync.get("fifteenthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.fifteenthKeybindStorage);
    fifteenthKeybind = obj.fifteenthKeybindStorage;
    document.getElementById("15KeybindInput").value = fifteenthKeybind;
});

window.onload =  chrome.storage.sync.get("sixteenthPhraseStorage", function (obj) {
    sixteenthPhrase = obj.sixteenthPhraseStorage;
    document.getElementById("16PhraseInput").value = sixteenthPhrase;
});
window.onload = chrome.storage.sync.get("sixteenthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.sixteenthKeybindStorage);
    sixteenthKeybind = obj.sixteenthKeybindStorage;
    document.getElementById("16KeybindInput").value = sixteenthKeybind;
});

window.onload =  chrome.storage.sync.get("seventeenthPhraseStorage", function (obj) {
    seventeenthPhrase = obj.seventeenthPhraseStorage;
    document.getElementById("17PhraseInput").value = seventeenthPhrase;
});
window.onload = chrome.storage.sync.get("seventeenthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.seventeenthKeybindStorage);
    seventeenthKeybind = obj.seventeenthKeybindStorage;
    document.getElementById("17KeybindInput").value = seventeenthKeybind;
});

window.onload =  chrome.storage.sync.get("eighteenthPhraseStorage", function (obj) {
    eighteenthPhrase = obj.eighteenthPhraseStorage;
    document.getElementById("18PhraseInput").value = eighteenthPhrase;
});
window.onload = chrome.storage.sync.get("eighteenthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.eighteenthKeybindStorage);
    eighteenthKeybind = obj.eighteenthKeybindStorage;
    document.getElementById("18KeybindInput").value = eighteenthKeybind;
});

window.onload =  chrome.storage.sync.get("nineteenthPhraseStorage", function (obj) {
    nineteenthPhrase = obj.nineteenthPhraseStorage;
    document.getElementById("19PhraseInput").value = nineteenthPhrase;
});
window.onload = chrome.storage.sync.get("nineteenthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.nineteenthKeybindStorage);
    nineteenthKeybind = obj.nineteenthKeybindStorage;
    document.getElementById("19KeybindInput").value = nineteenthKeybind;
});

window.onload =  chrome.storage.sync.get("twentiethPhraseStorage", function (obj) {
    twentiethPhrase = obj.twentiethPhraseStorage;
    document.getElementById("20PhraseInput").value = twentiethPhrase;
});
window.onload = chrome.storage.sync.get("twentiethKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentiethKeybindStorage);
    twentiethKeybind = obj.twentiethKeybindStorage;
    document.getElementById("20KeybindInput").value = twentiethKeybind;
});

window.onload =  chrome.storage.sync.get("twentyfirstPhraseStorage", function (obj) {
    twentyfirstPhrase = obj.twentyfirstPhraseStorage;
    document.getElementById("21PhraseInput").value = twentyfirstPhrase;
});
window.onload = chrome.storage.sync.get("twentyfirstKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentyfirstKeybindStorage);
    twentyfirstKeybind = obj.twentyfirstKeybindStorage;
    document.getElementById("21KeybindInput").value = twentyfirstKeybind;
});

window.onload =  chrome.storage.sync.get("twentysecondPhraseStorage", function (obj) {
    twentysecondPhrase = obj.twentysecondPhraseStorage;
    document.getElementById("22PhraseInput").value = twentysecondPhrase;
});
window.onload = chrome.storage.sync.get("twentysecondKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentysecondKeybindStorage);
    twentysecondKeybind = obj.twentysecondKeybindStorage;
    document.getElementById("22KeybindInput").value = twentysecondKeybind;
});

window.onload =  chrome.storage.sync.get("twentythirdPhraseStorage", function (obj) {
    twentythirdPhrase = obj.twentythirdPhraseStorage;
    document.getElementById("23PhraseInput").value = twentythirdPhrase;
});
window.onload = chrome.storage.sync.get("twentythirdKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentythirdKeybindStorage);
        twentythirdKeybind = obj.twentythirdKeybindStorage;
    document.getElementById("23KeybindInput").value = twentythirdKeybind;
});

window.onload =  chrome.storage.sync.get("twentyfourthPhraseStorage", function (obj) {
    twentyfourthPhrase = obj.twentyfourthPhraseStorage;
    document.getElementById("24PhraseInput").value = twentyfourthPhrase;
});
window.onload = chrome.storage.sync.get("twentyfourthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentyfourthKeybindStorage);
    twentyfourthKeybind = obj.twentyfourthKeybindStorage;
    document.getElementById("24KeybindInput").value = twentyfourthKeybind;
});

window.onload =  chrome.storage.sync.get("twentyfifthPhraseStorage", function (obj) {
    twentyfifthPhrase = obj.twentyfifthPhraseStorage;
    document.getElementById("25PhraseInput").value = twentyfifthPhrase;
});
window.onload = chrome.storage.sync.get("twentyfifthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentyfifthKeybindStorage);
    twentyfifthKeybind = obj.twentyfifthKeybindStorage;
    document.getElementById("25KeybindInput").value = twentyfifthKeybind;
});

window.onload =  chrome.storage.sync.get("twentysixthPhraseStorage", function (obj) {
    twentysixthPhrase = obj.twentysixthPhraseStorage;
    document.getElementById("26PhraseInput").value = twentysixthPhrase;
});
window.onload = chrome.storage.sync.get("twentysixthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentysixthKeybindStorage);
    twentysixthKeybind = obj.twentysixthKeybindStorage;
    document.getElementById("26KeybindInput").value = twentysixthKeybind;
});

window.onload =  chrome.storage.sync.get("twentyseventhPhraseStorage", function (obj) {
    twentyseventhPhrase = obj.twentyseventhPhraseStorage;
    document.getElementById("27PhraseInput").value = twentyseventhPhrase;
});
window.onload = chrome.storage.sync.get("twentyseventhKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentyseventhKeybindStorage);
    twentyseventhKeybind = obj.twentyseventhKeybindStorage;
    document.getElementById("27KeybindInput").value = twentyseventhKeybind;
});

window.onload =  chrome.storage.sync.get("twentyeighthPhraseStorage", function (obj) {
    twentyeighthPhrase = obj.twentyeighthPhraseStorage;
    document.getElementById("28PhraseInput").value = twentyeighthPhrase;
});
window.onload = chrome.storage.sync.get("twentyeighthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentyeighthKeybindStorage);
    twentyeighthKeybind = obj.twentyeighthKeybindStorage;
    document.getElementById("28KeybindInput").value = twentyeighthKeybind;
});

window.onload =  chrome.storage.sync.get("twentyninthPhraseStorage", function (obj) {
    twentyninthPhrase = obj.twentyninthPhraseStorage;
    document.getElementById("29PhraseInput").value = twentyninthPhrase;
});
window.onload = chrome.storage.sync.get("twentyninthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.twentyninthKeybindStorage);
    twentyninthKeybind = obj.twentyninthKeybindStorage;
    document.getElementById("29KeybindInput").value = twentyninthKeybind;
});

window.onload =  chrome.storage.sync.get("thirtiethPhraseStorage", function (obj) {
    thirtiethPhrase = obj.thirtiethPhraseStorage;
    document.getElementById("30PhraseInput").value = thirtiethPhrase;
});
window.onload = chrome.storage.sync.get("thirtiethKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtiethKeybindStorage);
    thirtiethKeybind = obj.thirtiethKeybindStorage;
    document.getElementById("30KeybindInput").value = thirtiethKeybind;
});

window.onload =  chrome.storage.sync.get("thirtyfirstPhraseStorage", function (obj) {
    thirtyfirstPhrase = obj.thirtyfirstPhraseStorage;
    document.getElementById("31PhraseInput").value = thirtyfirstPhrase;
});
window.onload = chrome.storage.sync.get("thirtyfirstKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtyfirstKeybindStorage);
    thirtyfirstKeybind = obj.thirtyfirstKeybindStorage;
    document.getElementById("31KeybindInput").value = thirtyfirstKeybind;
});

window.onload =  chrome.storage.sync.get("thirtysecondPhraseStorage", function (obj) {
    thirtysecondPhrase = obj.thirtysecondPhraseStorage;
    document.getElementById("32PhraseInput").value = thirtysecondPhrase;
});
window.onload = chrome.storage.sync.get("thirtysecondKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtysecondKeybindStorage);
    thirtysecondKeybind = obj.thirtysecondKeybindStorage;
    document.getElementById("32KeybindInput").value = thirtysecondKeybind;
});

window.onload =  chrome.storage.sync.get("thirtythirdPhraseStorage", function (obj) {
    thirtythirdPhrase = obj.thirtythirdPhraseStorage;
    document.getElementById("33PhraseInput").value = thirtythirdPhrase;
});
window.onload = chrome.storage.sync.get("thirtythirdKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtythirdKeybindStorage);
    thirtythirdKeybind = obj.thirtythirdKeybindStorage;
    document.getElementById("33KeybindInput").value = thirtythirdKeybind;
});

window.onload =  chrome.storage.sync.get("thirtyfourthPhraseStorage", function (obj) {
    thirtyfourthPhrase = obj.thirtyfourthPhraseStorage;
    document.getElementById("34PhraseInput").value = thirtyfourthPhrase;
});
window.onload = chrome.storage.sync.get("thirtyfourthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtyfourthKeybindStorage);
    thirtyfourthKeybind = obj.thirtyfourthKeybindStorage;
    document.getElementById("34KeybindInput").value = thirtyfourthKeybind;
});

window.onload =  chrome.storage.sync.get("thirtyfifthPhraseStorage", function (obj) {
    thirtyfifthPhrase = obj.thirtyfifthPhraseStorage;
    document.getElementById("35PhraseInput").value = thirtyfifthPhrase;
});
window.onload = chrome.storage.sync.get("thirtyfifthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtyfifthKeybindStorage);
    thirtyfifthKeybind = obj.thirtyfifthKeybindStorage;
    document.getElementById("35KeybindInput").value = thirtyfifthKeybind;
});

window.onload =  chrome.storage.sync.get("thirtysixthPhraseStorage", function (obj) {
    thirtysixthPhrase = obj.thirtysixthPhraseStorage;
    document.getElementById("36PhraseInput").value = thirtysixthPhrase;
});
window.onload = chrome.storage.sync.get("thirtysixthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtysixthKeybindStorage);
    thirtysixthKeybind = obj.thirtysixthKeybindStorage;
    document.getElementById("36KeybindInput").value = thirtysixthKeybind;
});

window.onload =  chrome.storage.sync.get("thirtyseventhPhraseStorage", function (obj) {
    thirtyseventhPhrase = obj.thirtyseventhPhraseStorage;
    document.getElementById("37PhraseInput").value = thirtyseventhPhrase;
});
window.onload = chrome.storage.sync.get("thirtyseventhKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtyseventhKeybindStorage);
    thirtyseventhKeybind = obj.thirtyseventhKeybindStorage;
    document.getElementById("37KeybindInput").value = thirtyseventhKeybind;
});

window.onload =  chrome.storage.sync.get("thirtyeighthPhraseStorage", function (obj) {
    thirtyeighthPhrase = obj.thirtyeighthPhraseStorage;
    document.getElementById("38PhraseInput").value = thirtyeighthPhrase;
});
window.onload = chrome.storage.sync.get("thirtyeighthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtyeighthKeybindStorage);
    thirtyeighthKeybind = obj.thirtyeighthKeybindStorage;
    document.getElementById("38KeybindInput").value = thirtyeighthKeybind;
});

window.onload =  chrome.storage.sync.get("thirtyninthPhraseStorage", function (obj) {
    thirtyninthPhrase = obj.thirtyninthPhraseStorage;
    document.getElementById("39PhraseInput").value = thirtyninthPhrase;
});
window.onload = chrome.storage.sync.get("thirtyninthKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.thirtyninthKeybindStorage);
    thirtyninthKeybind = obj.thirtyninthKeybindStorage;
    document.getElementById("39KeybindInput").value = thirtyninthKeybind;
});

window.onload =  chrome.storage.sync.get("fourtiethPhraseStorage", function (obj) {
    fourtiethPhrase = obj.fourtiethPhraseStorage;
    document.getElementById("40PhraseInput").value = fourtiethPhrase;
});
window.onload = chrome.storage.sync.get("fourtiethKeybindStorage", function (obj) {
    console.log("Keybind: "+ obj.fourtiethKeybindStorage);
    fourtiethKeybind = obj.fourtiethKeybindStorage;
    document.getElementById("40KeybindInput").value = fourtiethKeybind;
});

function Save(){
    var firstPhrase = document.getElementById('1PhraseInput').value;
    chrome.storage.sync.set({'firstPhraseStorage': firstPhrase}, function() {
        console.log(`Phrase: ${firstPhrase}`);
    });
    var firstKeybind = document.getElementById('1KeybindInput').value;
    chrome.storage.sync.set({'firstKeybindStorage': firstKeybind}, function() {
        console.log(`Keybind: ${firstKeybind}`);
    });

    var secondPhrase = document.getElementById('2PhraseInput').value;
    chrome.storage.sync.set({'secondPhraseStorage': secondPhrase}, function() {
        console.log(`Phrase: ${secondPhrase}`);
    });
    var secondKeybind = document.getElementById('2KeybindInput').value;
    chrome.storage.sync.set({'secondKeybindStorage': secondKeybind}, function() {
        console.log(`Keybind: ${secondKeybind}`);
    });

    var thirdPhrase = document.getElementById('3PhraseInput').value;
    chrome.storage.sync.set({'thirdPhraseStorage': thirdPhrase}, function() {
        console.log(`Phrase: ${thirdPhrase}`);
    });
    var thirdKeybind = document.getElementById('3KeybindInput').value;
    chrome.storage.sync.set({'thirdKeybindStorage': thirdKeybind}, function() {
        console.log(`Keybind: ${thirdKeybind}`);
    });

    var fourthPhrase = document.getElementById('4PhraseInput').value;
    chrome.storage.sync.set({'fourthPhraseStorage': fourthPhrase}, function() {
        console.log(`Phrase: ${fourthPhrase}`);
    });
    var fourthKeybind = document.getElementById('4KeybindInput').value;
    chrome.storage.sync.set({'fourthKeybindStorage': fourthKeybind}, function() {
        console.log(`Keybind: ${fourthKeybind}`);
    });

    var fifthPhrase = document.getElementById('5PhraseInput').value;
    chrome.storage.sync.set({'fifthPhraseStorage': fifthPhrase}, function() {
        console.log(`Phrase: ${fifthPhrase}`);
    });
    var fifthKeybind = document.getElementById('5KeybindInput').value;
    chrome.storage.sync.set({'fifthKeybindStorage': fifthKeybind}, function() {
        console.log(`Keybind: ${fifthKeybind}`);
    });

    var sixthPhrase = document.getElementById('6PhraseInput').value;
    chrome.storage.sync.set({'sixthPhraseStorage': sixthPhrase}, function() {
        console.log(`Phrase: ${sixthPhrase}`);
    });
    var sixthKeybind = document.getElementById('6KeybindInput').value;
    chrome.storage.sync.set({'sixthKeybindStorage': sixthKeybind}, function() {
        console.log(`Keybind: ${sixthKeybind}`);
    });

    var seventhPhrase = document.getElementById('7PhraseInput').value;
    chrome.storage.sync.set({'seventhPhraseStorage': seventhPhrase}, function() {
        console.log(`Phrase: ${seventhPhrase}`);
    });
    var seventhKeybind = document.getElementById('7KeybindInput').value;
    chrome.storage.sync.set({'seventhKeybindStorage': seventhKeybind}, function() {
        console.log(`Keybind: ${seventhKeybind}`);
    });

    var eighthPhrase = document.getElementById('8PhraseInput').value;
    chrome.storage.sync.set({'eighthPhraseStorage': eighthPhrase}, function() {
        console.log(`Phrase: ${eighthPhrase}`);
    });
    var eighthKeybind = document.getElementById('8KeybindInput').value;
    chrome.storage.sync.set({'eighthKeybindStorage': eighthKeybind}, function() {
        console.log(`Keybind: ${eighthKeybind}`);
    });

    var ninthPhrase = document.getElementById('9PhraseInput').value;
    chrome.storage.sync.set({'ninthPhraseStorage': ninthPhrase}, function() {
        console.log(`Phrase: ${ninthPhrase}`);
    });
    var ninthKeybind = document.getElementById('9KeybindInput').value;
    chrome.storage.sync.set({'ninthKeybindStorage': ninthKeybind}, function() {
        console.log(`Keybind: ${ninthKeybind}`);
    });

    var tenthPhrase = document.getElementById('10PhraseInput').value;
    chrome.storage.sync.set({'tenthPhraseStorage': tenthPhrase}, function() {
        console.log(`Phrase: ${tenthPhrase}`);
    });
    var tenthKeybind = document.getElementById('10KeybindInput').value;
    chrome.storage.sync.set({'tenthKeybindStorage': tenthKeybind}, function() {
        console.log(`Keybind: ${tenthKeybind}`);
    });

    var eleventhPhrase = document.getElementById('11PhraseInput').value;
    chrome.storage.sync.set({'eleventhPhraseStorage': eleventhPhrase}, function() {
        console.log(`Phrase: ${eleventhPhrase}`);
    });
    var eleventhKeybind = document.getElementById('11KeybindInput').value;
    chrome.storage.sync.set({'eleventhKeybindStorage': eleventhKeybind}, function() {
        console.log(`Keybind: ${eleventhKeybind}`);
    });

    var twelfthPhrase = document.getElementById('12PhraseInput').value;
    chrome.storage.sync.set({'twelfthPhraseStorage': twelfthPhrase}, function() {
        console.log(`Phrase: ${twelfthPhrase}`);
    });
    var twelfthKeybind = document.getElementById('12KeybindInput').value;
    chrome.storage.sync.set({'twelfthKeybindStorage': twelfthKeybind}, function() {
        console.log(`Keybind: ${twelfthKeybind}`);
    });
    
    var thirteenthPhrase = document.getElementById('13PhraseInput').value;
    chrome.storage.sync.set({'thirteenthPhraseStorage': thirteenthPhrase}, function() {
        console.log(`Phrase: ${thirteenthPhrase}`);
    });
    var thirteenthKeybind = document.getElementById('13KeybindInput').value;
    chrome.storage.sync.set({'thirteenthKeybindStorage': thirteenthKeybind}, function() {
        console.log(`Keybind: ${thirteenthKeybind}`);
    });

    var fourteenthPhrase = document.getElementById('14PhraseInput').value;
    chrome.storage.sync.set({'fourteenthPhraseStorage': fourteenthPhrase}, function() {
        console.log(`Phrase: ${fourteenthPhrase}`);
    });
    var fourteenthKeybind = document.getElementById('14KeybindInput').value;
    chrome.storage.sync.set({'fourteenthKeybindStorage': fourteenthKeybind}, function() {
        console.log(`Keybind: ${fourteenthKeybind}`);
    });

    var fifteenthPhrase = document.getElementById('15PhraseInput').value;
    chrome.storage.sync.set({'fifteenthPhraseStorage': fifteenthPhrase}, function() {
        console.log(`Phrase: ${fifteenthPhrase}`);
    });
    var fifteenthKeybind = document.getElementById('15KeybindInput').value;
    chrome.storage.sync.set({'fifteenthKeybindStorage': fifteenthKeybind}, function() {
        console.log(`Keybind: ${fifteenthKeybind}`);
    });

    var sixteenthPhrase = document.getElementById('16PhraseInput').value;
    chrome.storage.sync.set({'sixteenthPhraseStorage': sixteenthPhrase}, function() {
        console.log(`Phrase: ${sixteenthPhrase}`);
    });
    var sixteenthKeybind = document.getElementById('16KeybindInput').value;
    chrome.storage.sync.set({'sixteenthKeybindStorage': sixteenthKeybind}, function() {
        console.log(`Keybind: ${sixteenthKeybind}`);
    });

    var seventeenthPhrase = document.getElementById('17PhraseInput').value;
    chrome.storage.sync.set({'seventeenthPhraseStorage': seventeenthPhrase}, function() {
        console.log(`Phrase: ${seventeenthPhrase}`);
    });
    var seventeenthKeybind = document.getElementById('17KeybindInput').value;
    chrome.storage.sync.set({'seventeenthKeybindStorage': seventeenthKeybind}, function() {
        console.log(`Keybind: ${seventeenthKeybind}`);
    });

    var eighteenthPhrase = document.getElementById('18PhraseInput').value;
    chrome.storage.sync.set({'eighteenthPhraseStorage': eighteenthPhrase}, function() {
        console.log(`Phrase: ${eighteenthPhrase}`);
    });
    var eighteenthKeybind = document.getElementById('18KeybindInput').value;
    chrome.storage.sync.set({'eighteenthKeybindStorage': eighteenthKeybind}, function() {
        console.log(`Keybind: ${eighteenthKeybind}`);
    });

    var nineteenthPhrase = document.getElementById('19PhraseInput').value;
    chrome.storage.sync.set({'nineteenthPhraseStorage': nineteenthPhrase}, function() {
        console.log(`Phrase: ${nineteenthPhrase}`);
    });
    var nineteenthKeybind = document.getElementById('19KeybindInput').value;
    chrome.storage.sync.set({'nineteenthKeybindStorage': nineteenthKeybind}, function() {
        console.log(`Keybind: ${nineteenthKeybind}`);
    });

    var twentiethPhrase = document.getElementById('20PhraseInput').value;
    chrome.storage.sync.set({'twentiethPhraseStorage': twentiethPhrase}, function() {
        console.log(`Phrase: ${twentiethPhrase}`);
    });
    var twentiethKeybind = document.getElementById('20KeybindInput').value;
    chrome.storage.sync.set({'twentiethKeybindStorage': twentiethKeybind}, function() {
        console.log(`Keybind: ${twentiethKeybind}`);
    });

    var twentyfirstPhrase = document.getElementById('21PhraseInput').value;
    chrome.storage.sync.set({'twentyfirstPhraseStorage': twentyfirstPhrase}, function() {
        console.log(`Phrase: ${twentyfirstPhrase}`);
    });
    var twentyfirstKeybind = document.getElementById('21KeybindInput').value;
    chrome.storage.sync.set({'twentyfirstKeybindStorage': twentyfirstKeybind}, function() {
        console.log(`Keybind: ${twentyfirstKeybind}`);
    });

    var twentysecondPhrase = document.getElementById('22PhraseInput').value;
    chrome.storage.sync.set({'twentysecondPhraseStorage': twentysecondPhrase}, function() {
        console.log(`Phrase: ${twentysecondPhrase}`);
    });
    var twentysecondKeybind = document.getElementById('22KeybindInput').value;
    chrome.storage.sync.set({'twentysecondKeybindStorage': twentysecondKeybind}, function() {
        console.log(`Keybind: ${twentysecondKeybind}`);
    });
    
    var twentythirdPhrase = document.getElementById('23PhraseInput').value;
    chrome.storage.sync.set({'twentythirdPhraseStorage': twentythirdPhrase}, function() {
        console.log(`Phrase: ${twentythirdPhrase}`);
    });
    var twentythirdKeybind = document.getElementById('23KeybindInput').value;
    chrome.storage.sync.set({'twentythirdKeybindStorage': twentythirdKeybind}, function() {
        console.log(`Keybind: ${twentythirdKeybind}`);
    });

    var twentyfourthPhrase = document.getElementById('24PhraseInput').value;
    chrome.storage.sync.set({'twentyfourthPhraseStorage': twentyfourthPhrase}, function() {
        console.log(`Phrase: ${twentyfourthPhrase}`);
    });
    var twentyfourthKeybind = document.getElementById('24KeybindInput').value;
    chrome.storage.sync.set({'twentyfourthKeybindStorage': twentyfourthKeybind}, function() {
        console.log(`Keybind: ${twentyfourthKeybind}`);
    });

    var twentyfifthPhrase = document.getElementById('25PhraseInput').value;
    chrome.storage.sync.set({'twentyfifthPhraseStorage': twentyfifthPhrase}, function() {
        console.log(`Phrase: ${twentyfifthPhrase}`);
    });
    var twentyfifthKeybind = document.getElementById('25KeybindInput').value;
    chrome.storage.sync.set({'twentyfifthKeybindStorage': twentyfifthKeybind}, function() {
        console.log(`Keybind: ${twentyfifthKeybind}`);
    });

    var twentysixthPhrase = document.getElementById('26PhraseInput').value;
    chrome.storage.sync.set({'twentysixthPhraseStorage': twentysixthPhrase}, function() {
        console.log(`Phrase: ${twentysixthPhrase}`);
    });
    var twentysixthKeybind = document.getElementById('26KeybindInput').value;
    chrome.storage.sync.set({'twentysixthKeybindStorage': twentysixthKeybind}, function() {
        console.log(`Keybind: ${twentysixthKeybind}`);
    });

    var twentyseventhPhrase = document.getElementById('27PhraseInput').value;
    chrome.storage.sync.set({'twentyseventhPhraseStorage': twentyseventhPhrase}, function() {
        console.log(`Phrase: ${twentyseventhPhrase}`);
    });
    var twentyseventhKeybind = document.getElementById('27KeybindInput').value;
    chrome.storage.sync.set({'twentyseventhKeybindStorage': twentyseventhKeybind}, function() {
        console.log(`Keybind: ${twentyseventhKeybind}`);
    });

    var twentyeighthPhrase = document.getElementById('28PhraseInput').value;
    chrome.storage.sync.set({'twentyeighthPhraseStorage': twentyeighthPhrase}, function() {
        console.log(`Phrase: ${twentyeighthPhrase}`);
    });
    var twentyeighthKeybind = document.getElementById('28KeybindInput').value;
    chrome.storage.sync.set({'twentyeighthKeybindStorage': twentyeighthKeybind}, function() {
        console.log(`Keybind: ${twentyeighthKeybind}`);
    });

    var twentyninthPhrase = document.getElementById('29PhraseInput').value;
    chrome.storage.sync.set({'twentyninthPhraseStorage': twentyninthPhrase}, function() {
        console.log(`Phrase: ${twentyninthPhrase}`);
    });
    var twentyninthKeybind = document.getElementById('29KeybindInput').value;
    chrome.storage.sync.set({'twentyninthKeybindStorage': twentyninthKeybind}, function() {
        console.log(`Keybind: ${twentyninthKeybind}`);
    });

    var thirtiethPhrase = document.getElementById('30PhraseInput').value;
    chrome.storage.sync.set({'thirtiethPhraseStorage': thirtiethPhrase}, function() {
        console.log(`Phrase: ${thirtiethPhrase}`);
    });
    var thirtiethKeybind = document.getElementById('30KeybindInput').value;
    chrome.storage.sync.set({'thirtiethKeybindStorage': thirtiethKeybind}, function() {
        console.log(`Keybind: ${thirtiethKeybind}`);
    });

    var thirtyfirstPhrase = document.getElementById('31PhraseInput').value;
    chrome.storage.sync.set({'thirtyfirstPhraseStorage': thirtyfirstPhrase}, function() {
        console.log(`Phrase: ${thirtyfirstPhrase}`);
    });
    var thirtyfirstKeybind = document.getElementById('31KeybindInput').value;
    chrome.storage.sync.set({'thirtyfirstKeybindStorage': thirtyfirstKeybind}, function() {
        console.log(`Keybind: ${thirtyfirstKeybind}`);
    });

    var thirtysecondPhrase = document.getElementById('32PhraseInput').value;
    chrome.storage.sync.set({'thirtysecondPhraseStorage': thirtysecondPhrase}, function() {
        console.log(`Phrase: ${thirtysecondPhrase}`);
    });
    var thirtysecondKeybind = document.getElementById('32KeybindInput').value;
    chrome.storage.sync.set({'thirtysecondKeybindStorage': thirtysecondKeybind}, function() {
        console.log(`Keybind: ${thirtysecondKeybind}`);
    });
    
    var thirtythirdPhrase = document.getElementById('33PhraseInput').value;
    chrome.storage.sync.set({'thirtythirdPhraseStorage': thirtythirdPhrase}, function() {
        console.log(`Phrase: ${thirtythirdPhrase}`);
    });
    var thirtythirdKeybind = document.getElementById('33KeybindInput').value;
    chrome.storage.sync.set({'thirtythirdKeybindStorage': thirtythirdKeybind}, function() {
        console.log(`Keybind: ${thirtythirdKeybind}`);
    });

    var thirtyfourthPhrase = document.getElementById('34PhraseInput').value;
    chrome.storage.sync.set({'thirtyfourthPhraseStorage': thirtyfourthPhrase}, function() {
        console.log(`Phrase: ${thirtyfourthPhrase}`);
    });
    var thirtyfourthKeybind = document.getElementById('34KeybindInput').value;
    chrome.storage.sync.set({'thirtyfourthKeybindStorage': thirtyfourthKeybind}, function() {
        console.log(`Keybind: ${thirtyfourthKeybind}`);
    });

    var thirtyfifthPhrase = document.getElementById('35PhraseInput').value;
    chrome.storage.sync.set({'thirtyfifthPhraseStorage': thirtyfifthPhrase}, function() {
        console.log(`Phrase: ${thirtyfifthPhrase}`);
    });
    var thirtyfifthKeybind = document.getElementById('35KeybindInput').value;
    chrome.storage.sync.set({'thirtyfifthKeybindStorage': thirtyfifthKeybind}, function() {
        console.log(`Keybind: ${thirtyfifthKeybind}`);
    });

    var thirtysixthPhrase = document.getElementById('36PhraseInput').value;
    chrome.storage.sync.set({'thirtysixthPhraseStorage': thirtysixthPhrase}, function() {
        console.log(`Phrase: ${thirtysixthPhrase}`);
    });
    var thirtysixthKeybind = document.getElementById('36KeybindInput').value;
    chrome.storage.sync.set({'thirtysixthKeybindStorage': thirtysixthKeybind}, function() {
        console.log(`Keybind: ${thirtysixthKeybind}`);
    });

    var thirtyseventhPhrase = document.getElementById('37PhraseInput').value;
    chrome.storage.sync.set({'thirtyseventhPhraseStorage': thirtyseventhPhrase}, function() {
        console.log(`Phrase: ${thirtyseventhPhrase}`);
    });
    var thirtyseventhKeybind = document.getElementById('37KeybindInput').value;
    chrome.storage.sync.set({'thirtyseventhKeybindStorage': thirtyseventhKeybind}, function() {
        console.log(`Keybind: ${thirtyseventhKeybind}`);
    });

    var thirtyeighthPhrase = document.getElementById('38PhraseInput').value;
    chrome.storage.sync.set({'thirtyeighthPhraseStorage': thirtyeighthPhrase}, function() {
        console.log(`Phrase: ${thirtyeighthPhrase}`);
    });
    var thirtyeighthKeybind = document.getElementById('38KeybindInput').value;
    chrome.storage.sync.set({'thirtyeighthKeybindStorage': thirtyeighthKeybind}, function() {
        console.log(`Keybind: ${thirtyeighthKeybind}`);
    });

    var thirtyninthPhrase = document.getElementById('39PhraseInput').value;
    chrome.storage.sync.set({'thirtyninthPhraseStorage': thirtyninthPhrase}, function() {
        console.log(`Phrase: ${thirtyninthPhrase}`);
    });
    var thirtyninthKeybind = document.getElementById('39KeybindInput').value;
    chrome.storage.sync.set({'thirtyninthKeybindStorage': thirtyninthKeybind}, function() {
        console.log(`Keybind: ${thirtyninthKeybind}`);
    });
    
    var fourtiethPhrase = document.getElementById('40PhraseInput').value;
    chrome.storage.sync.set({'fourtiethPhraseStorage': fourtiethPhrase}, function() {
        console.log(`Phrase: ${fourtiethPhrase}`);
    });
    var fourtiethKeybind = document.getElementById('40KeybindInput').value;
    chrome.storage.sync.set({'fourtiethKeybindStorage': fourtiethKeybind}, function() {
        console.log(`Keybind: ${fourtiethKeybind}`);
    });
    location.reload();
}


document.addEventListener('DOMContentLoaded', function() {

    // opens a communication between scripts
    var port = chrome.runtime.connect();

    // listens to the click of the button into the popup content
    document.getElementById('save-top').addEventListener('click', function() {

        Save();
        
    });

    document.getElementById('save-bottom').addEventListener('click', function() {

        Save();
        
    });

});


/*
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("save").addEventListener("click", alert('HI'));
  });

window.onload = function(){
    document.getElementById('save').onclick = function()     {
        var firstPhrase = document.getElementById('first-phrase-input').value;
        chrome.storage.sync.set({'firstPhraseStorage': firstPhrase}, function() {
            alert(firstPhraseStorage);
        });
    }
}
document.getElementById("save").onclick = function(){
    alert('Hiii');
};
*/