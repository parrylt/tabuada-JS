// var numero = prompt("Digite um número para multiplicar");
// var tab = 0;

// while (tab < 11){
//     document.write (numero + " x " + tab + " = " + numero * tab + "<br>");
//     tab ++;
// }


function mult(){

    var tab = 0;
    var numero = parseInt(document.getElementById("numero").value);

    while (tab < 11){
    document.write (numero + " x " + tab + " = " + numero * tab + "<br>");
    tab ++;
    }
}