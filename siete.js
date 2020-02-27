function mostrar()
{
    var nota=prompt("Ingrese su nota");
    var sexo=prompt("Ingrese su sexo");
    var respuesta="si";
    {
        alert("Su nota es:  " +nota+ " y su sexo es:  " +sexo);
    }
    respuesta=prompt("Desea ingresar otra nota y otro sexo?");
    var contador=0;
    var acumulador=0;
    while(contador<10)
    {
        nota>=0 && nota<=10
        acumulador=acumulador + parseInt(nota);
        contador++;
    }
    
}
/* 
var nota=0;
var sexo;
var sumaNotas=0;
var notaBaja=10;
var sexoNotaBaja;
var contVaronSeis=0;

for(var i=0; i<5; i++)
{
    do{
        nota=parseInt(prompt("Ingrese una nota entre o y 10));
        if(isNaN(nota))
        {
            alert("Debe ser un numero entre o y 10");
            nota=-1;
        }
    }while(nota<=0 || nota>10);

    sumaNotas = sumaNotas + parseInt(nota);

    do
    {
        sexo=prompt("Ingrese sexo f o m");
    }while(sexo!= "f" && sexo!= "m")

    if(nota<notaBaja)
    {
        notaBaja=nota;
        sexoNotaBaja=sexo;
    }
    if(sexo=="m" && nota>=6)
    {
        contVaronSeis++;
    }
    alert("Suma notas  " + sumaNotas);
    alert("Promedio de las notas totales " + (sumaNotas/5));
    alert("La nota mas baja es= " + notaBaja " de sexo= " + sexoMasBajo);
    alert("La cantidad de varones con nota mayor o igual a 6= " + cantVaronSeis);
}
*/