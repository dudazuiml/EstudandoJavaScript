function mensagem()
{
    alert("BOM DIA!!!");
}

function alertaCorDeFundo()
{
    document.body.style.backgroundColor = "#FF0000";
    let h1 = document.querySelector("h1");
    h1.style.color = "#FFF";

    let texto = document.querySelector("p");
    texto.style.fontSize = "60px";
    texto.style.color = "#FFFF00";

    let info = document.querySelector(".info");
    info.style.color = "#000FFF";
}    

function ResetarCor()
{
    document.body.style.backgroundColor = "#FFF";
}