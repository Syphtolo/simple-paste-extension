document.addEventListener('keydown', function (event) {
    let keysPressed = {};

    keysPressed[event.key] = true;
    if (keysPressed['a']) {
        var copyText = document.getElementById("a");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['A']) {
        var copyText = document.getElementById("a-cap");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['e']) {
        var copyText = document.getElementById("e");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['E']) {
        var copyText = document.getElementById("e-cap");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['i']) {
        var copyText = document.getElementById("i");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['I']) {
        var copyText = document.getElementById("i-cap");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['n']) {
        var copyText = document.getElementById("n");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['N']) {
        var copyText = document.getElementById("n-cap");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['o']) {
        var copyText = document.getElementById("o");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['O']) {
        var copyText = document.getElementById("o-cap");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['u']) {
        var copyText = document.getElementById("u");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['U']) {
        var copyText = document.getElementById("u-cap");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['!'] || keysPressed['1']) {
        var copyText = document.getElementById("exclamation");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['?'] || keysPressed['/']) {
        var copyText = document.getElementById("question");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['<'] || keysPressed[',']) {
        var copyText = document.getElementById("open-quote");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['>'] || keysPressed['.']) {
        var copyText = document.getElementById("close-quote");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['p']) {
        var copyText = document.getElementById("pi");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
    if (keysPressed['t']) {
        var copyText = document.getElementById("theta");
        copyText.select();
        document.execCommand("copy");
        window.close();
    }
  });
