chrome.commands.onCommand.addListener(function(command) {
    if (command==="open-spanish-only-ui"){
        window.open("spanishpopup.html", "extension_popup", "width=550px,height=300px,status=no,scrollbars=no,resizable=no");

    }
    if (command === "global-main-gui") {
        window.open("popup.html", "extension_popup", "width=800px,height=450px,status=no,scrollbars=no,resizable=no");
    }
    
  });
 
  chrome.runtime.onInstalled.addListener(function(details){
    const previousVersion = details.previousVersion;
    const currentVersion = chrome.runtime.getManifest().version
    if(details.reason == "install"){
        alert('The Simple Paste Chrome Extension has been installed! Go to the extension popup or the extension page for help!');
        chrome.storage.sync.set({'firstPhraseStorage': null,'firstKeybindStorage': null,
            'secondPhraseStorage': null, 'secondKeybindStorage': null,
            'thirdPhraseStorage': null,'thirdKeybindStorage': null, 
            'fourthPhraseStorage': null,'fourthKeybindStorage': null,
            'fifthPhraseStorage': null, 'fifthKeybindStorage': null,
            'sixthPhraseStorage': null, 'sixthKeybindStorage': null,
            'seventhPhraseStorage': null, 'seventhKeybindStorage': null,
            'eighthPhraseStorage': null, 'eighthKeybindStorage': null,
            'ninthPhraseStorage': null, 'ninthKeybindStorage': null,
            'tenthPhraseStorage': null, 'tenthKeybindStorage': null,
            'eleventhPhraseStorage': null, 'eleventhKeybindStorage': null,
            'twelfthPhraseStorage': null, 'twelfthKeybindStorage': null,
            'thirteenthPhraseStorage': null, 'thirteenthKeybindStorage': null,
            'fourteenthPhraseStorage': null, 'fourteenthKeybindStorage': null,
            'fifteenthPhraseStorage': null, 'fifteenthKeybindStorage': null,
            'sixteenthPhraseStorage': null, 'sixteenthKeybindStorage': null,
            'seventeenthPhraseStorage': null, 'seventeenthKeybindStorage': null,
            'eighteenthPhraseStorage': null, 'eighteenthKeybindStorage': null,
            'nineteenthPhraseStorage': null, 'nineteenthKeybindStorage': null,
            'twentiethPhraseStorage': null, 'twentiethKeybindStorage': null,
            'twentyfirstPhraseStorage': null, 'twentyfirstKeybindStorage': null,
            'twentysecondPhraseStorage': null, 'twentysecondKeybindStorage': null,
            'twentythirdPhraseStorage': null, 'twentythirdKeybindStorage': null,
            'twentyfourthPhraseStorage': null, 'twentyfourthKeybindStorage': null,
            'twentyfifthPhraseStorage': null, 'twentyfifthKeybindStorage': null,
            'twentysixthPhraseStorage': null, 'twentysixthKeybindStorage': null,
            'twentyseventhPhraseStorage': null, 'twentyseventhKeybindStorage': null,
            'twentyeighthPhraseStorage': null, 'twentyeighthKeybindStorage': null,
            'twentyninthPhraseStorage': null, 'twentyninthKeybindStorage': null,
            'thirtiethPhraseStorage': null, 'thirtiethKeybindStorage': null,
            'thirtyfirstPhraseStorage': null, 'thirtyfirstKeybindStorage': null,
            'thirtysecondPhraseStorage': null, 'thirtysecondKeybindStorage': null,
            'thirtythirdPhraseStorage': null, 'thirtythirdKeybindStorage': null,
            'thirtyfourthPhraseStorage': null, 'thirtyfourthKeybindStorage': null,
            'thirtyfifthPhraseStorage': null, 'thirtyfifthKeybindStorage': null,
            'thirtysixthPhraseStorage': null, 'thirtysixthKeybindStorage': null,
            'thirtyseventhPhraseStorage': null, 'thirtyseventhKeybindStorage': null,
            'thirtyeighthPhraseStorage': null, 'thirtyeighthKeybindStorage': null,
            'thirtyninthPhraseStorage': null, 'thirtyninthKeybindStorage': null,
            'fourtiethPhraseStorage': null, 'fourtiethKeybindStorage': null}, function() {
                alert('The extensinon has now been set up!');
        });
    }else if(details.reason == "update"){
        alert('The Simple Paste Chrome Extension has been updated! Go to the extension popup or the extension page for help!');
        if (previousVersion === "1.1.0" || currentVersion === "2.0.0"){
            chrome.storage.sync.set({'firstPhraseStorage': null,'firstKeybindStorage': null,
            'secondPhraseStorage': null, 'secondKeybindStorage': null,
            'thirdPhraseStorage': null,'thirdKeybindStorage': null, 
            'fourthPhraseStorage': null,'fourthKeybindStorage': null,
            'fifthPhraseStorage': null, 'fifthKeybindStorage': null,
            'sixthPhraseStorage': null, 'sixthKeybindStorage': null,
            'seventhPhraseStorage': null, 'seventhKeybindStorage': null,
            'eighthPhraseStorage': null, 'eighthKeybindStorage': null,
            'ninthPhraseStorage': null, 'ninthKeybindStorage': null,
            'tenthPhraseStorage': null, 'tenthKeybindStorage': null,
            'eleventhPhraseStorage': null, 'eleventhKeybindStorage': null,
            'twelfthPhraseStorage': null, 'twelfthKeybindStorage': null,
            'thirteenthPhraseStorage': null, 'thirteenthKeybindStorage': null,
            'fourteenthPhraseStorage': null, 'fourteenthKeybindStorage': null,
            'fifteenthPhraseStorage': null, 'fifteenthKeybindStorage': null,
            'sixteenthPhraseStorage': null, 'sixteenthKeybindStorage': null,
            'seventeenthPhraseStorage': null, 'seventeenthKeybindStorage': null,
            'eighteenthPhraseStorage': null, 'eighteenthKeybindStorage': null,
            'nineteenthPhraseStorage': null, 'nineteenthKeybindStorage': null,
            'twentiethPhraseStorage': null, 'twentiethKeybindStorage': null,
            'twentyfirstPhraseStorage': null, 'twentyfirstKeybindStorage': null,
            'twentysecondPhraseStorage': null, 'twentysecondKeybindStorage': null,
            'twentythirdPhraseStorage': null, 'twentythirdKeybindStorage': null,
            'twentyfourthPhraseStorage': null, 'twentyfourthKeybindStorage': null,
            'twentyfifthPhraseStorage': null, 'twentyfifthKeybindStorage': null,
            'twentysixthPhraseStorage': null, 'twentysixthKeybindStorage': null,
            'twentyseventhPhraseStorage': null, 'twentyseventhKeybindStorage': null,
            'twentyeighthPhraseStorage': null, 'twentyeighthKeybindStorage': null,
            'twentyninthPhraseStorage': null, 'twentyninthKeybindStorage': null,
            'thirtiethPhraseStorage': null, 'thirtiethKeybindStorage': null,
            'thirtyfirstPhraseStorage': null, 'thirtyfirstKeybindStorage': null,
            'thirtysecondPhraseStorage': null, 'thirtysecondKeybindStorage': null,
            'thirtythirdPhraseStorage': null, 'thirtythirdKeybindStorage': null,
            'thirtyfourthPhraseStorage': null, 'thirtyfourthKeybindStorage': null,
            'thirtyfifthPhraseStorage': null, 'thirtyfifthKeybindStorage': null,
            'thirtysixthPhraseStorage': null, 'thirtysixthKeybindStorage': null,
            'thirtyseventhPhraseStorage': null, 'thirtyseventhKeybindStorage': null,
            'thirtyeighthPhraseStorage': null, 'thirtyeighthKeybindStorage': null,
            'thirtyninthPhraseStorage': null, 'thirtyninthKeybindStorage': null,
            'fourtiethPhraseStorage': null, 'fourtiethKeybindStorage': null}, function() {
                alert('The extension has now been set up!');
            });
        } 
    }
});