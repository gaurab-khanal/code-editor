

const run = () => {
    let htmlCode = document.getElementById('html-code').value;
    let cssCode = "<style>" + document.getElementById('css-code').value + "</style>";
    let jsCode = document.getElementById('js-code').value;
    let output = document.getElementById('output');
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(jsCode);
}

document.getElementById('html-code').addEventListener('keyup', run);
document.getElementById('css-code').addEventListener('keyup', run);
document.getElementById('js-code').addEventListener('keyup', run);

