function getText(texto_id){
    return document.getElementById(texto_id).value;
}
function copy_text(id_elemento){
    var texto = document.getElementById("texto-copiar").innerText;

    if(texto !== ""){
        var aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
    }
}

function validarTexto(texto){
    return texto !== "";
}
function encriptar(){
    let texto = getText("texto");

    if(validarTexto(texto)){

    }
}
