function getText(texto_id){
    return document.getElementById(texto_id).value;
}
function copy_text(id_elemento){
    let texto = document.getElementById("texto-copiar").innerHTML;

    if(texto !== ""){
        let aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }
}

function textoVacio(texto){
    return texto !== "";
}

function showClipboardMenu(){
        var texto = document.getElementById("texto-vacio");
        var clipboard = document.getElementById("clipboard");
        texto.style.opacity = "0"
        texto.style.pointerEvents = "none";
        clipboard.style.opacity = "1"
        clipboard.style.pointerEvents = "all";
}

function showEmptyMenu(){
    var texto = document.getElementById("texto-vacio");
    var clipboard = document.getElementById("clipboard");
    texto.style.opacity = "1"
    texto.style.pointerEvents = "all";
    clipboard.style.opacity = "0"
    clipboard.style.pointerEvents = "none";
}

function mostrarMensaje(texto){
    document.getElementById("texto-copiar").innerText = texto;
}
function encriptar(){
    let texto = getText("texto");

    if(textoVacio(texto)){
        showClipboardMenu();
        mostrarMensaje(getTextoEncriptado(texto));
    }else {
        showEmptyMenu();
    }
}
function getTextoEncriptado(texto){
    let arreglo = texto.split("");

    for (let i = 0; i < arreglo.length; i++) {
        switch (arreglo[i]){
            case 'a':
                arreglo[i] = arreglo[i].replaceAll("a","ai");
                break
            case 'e':
                arreglo[i] = arreglo[i].replaceAll('e','enter');
                break
            case 'i':
                arreglo[i] = arreglo[i].replaceAll('i','imes');
                break
            case 'o':
                arreglo[i] = arreglo[i].replaceAll('o','ober');
                break
            case 'u':
                arreglo[i] = arreglo[i].replaceAll('u','ufat');
                break
        }
    }
    return arreglo.join("");
}

function desencriptar(){
    let texto = getText("texto");

    if(textoVacio(texto)){
        showClipboardMenu();
        mostrarMensaje(getTextoDesencriptado(texto));
    }else {
        showEmptyMenu();
    }
}

function getTextoDesencriptado(texto){
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");

    return texto;
}
