var texto1 = document.getElementById("text1");
    var texto2 = document.getElementById("text2");
    var texto3 = document.getElementById("text3");
    var texto4 = document.getElementById("text4");


function conteudo1() {  
    if (texto1.style.display === "none") {
        texto1.style.display = "block";
        texto2.style.display = "none";
        texto3.style.display = "none";
        texto4.style.display = "none";
    }
}

function conteudo2() {  
    if (texto2.style.display === "none") {
        texto2.style.display = "block";
        texto1.style.display = "none";
        texto3.style.display = "none";
        texto4.style.display = "none";
    }
}

function conteudo3() {  
    if (texto3.style.display === "none") {
        texto3.style.display = "block";
        texto2.style.display = "none";
        texto1.style.display = "none";
        texto4.style.display = "none";
    }
}

function conteudo4() {  
    if (texto4.style.display === "none") {
        texto4.style.display = "block";
        texto2.style.display = "none";
        texto3.style.display = "none";
        texto1.style.display = "none";
    }
}

