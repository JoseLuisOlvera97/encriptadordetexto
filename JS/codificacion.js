var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;
var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

function encriptar (){
    if (document.querySelector("#input-texto").value != "") {
            var texto = document.querySelector("#input-texto").value;
            var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
            document.querySelector(".text-input-salida").value = textoCifrado;
            document.querySelector("#input-texto").value;
            //document.querySelector("#input-texto").value="";
            let input = document.getElementById("btn-copy");
            //input.style.visibility = 'visible';
            input.style.pointerEvents= 'auto';
    } else {
        alert("NO hay texto por encriptar");
    }
    }

function desencriptar (){ 

    if (document.querySelector("#input-texto").value != "") {
        var texto = document.querySelector("#input-texto").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".text-input-salida").value = textoCifrado; document.querySelector("#input-texto").value;
        
    } else {
        alert("NO hay texto por desencriptar");
    }
    }

function copiartexto (){ 

    if (document.querySelector("#msg").value != "") {
        let inputText =document.getElementById("msg");
        inputText.select();
        inputText.setSelectionRange(0,9999);
        navigator.clipboard.writeText(inputText.value);
        alert("Texto copiado");
    } else {
        alert("No hay texto por copiar");
    }
}