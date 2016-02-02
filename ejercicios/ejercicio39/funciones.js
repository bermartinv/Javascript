var editando = false;

function editar(nodo){
var padre=nodo.parentNode;
var nombre_padre=padre.nodeName;


 //document.getElementById("sacar").innerHTML=nombre_padre;   
 var hijo=padre.getElementsByTagName("td");
    //document.getElementById("sacar").innerHTML=hijo.length; 
 
 if (editando == false) {

var nodoContenedorForm = document.getElementById('contenedorForm'); //Nodo DIV
var alimento = hijo[0].textContent; 
var calorias = hijo[1].textContent;
var grasas = hijo[2].textContent;
var proteina = hijo[3].textContent;
var carbohidratos = hijo[4].textContent;
var opciones = hijo[5].textContent;    

var nuevoHTML='<td><input type="text" name="alimento" id="alimento" value="'+alimento+'" size="10"></td>'+
'<td><input type="text" name="calorias" id="calorias" value="'+calorias+'" size="5"</td>'+
'<td><input type="text" name="grasas" id="grasas" value="'+grasas+'" size="5"</td>'+
'<td><input type="text" name="proteina" id="proteina" value="'+proteina+'" size="5"</td>'+
'<td><input type="text" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="5"</td> <td>En edición</td>';
padre.innerHTML=nuevoHTML;
     
 nodoContenedorForm.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+

'<form name = "formulario" action="http://aprenderaprogramar.com" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+

'<input class="boton" type = "submit" value="Aceptar"> <input class="boton" type="reset" value="Cancelar">';

editando = "true";}

else {alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');


}
    
}