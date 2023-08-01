<?php
/*
SERVIDOR WEB INTEGRADO PARA DESARROLLO

$ php -S localhost:8000 -t ruta/

por ejemplo para esta carpeta:
php -S localhost:8000 -t /home/kuark/Escritorio/progra_2023_mayo/javascript/jquery/
*/

/* recibo datos del formulario  */
// Defino algunas variables:
$nombre = $alias = $email = $region = $comuna = $candidato = $como = $rut = "";


//$_SERVER["REQUEST_METHOD"] retorna el metodo (get or post) que recibimos de un form o de ajax en este caso
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = funcion_seguridad($_POST["nombre"]);
  $alias = funcion_seguridad($_POST["alias"]);
  $rut = funcion_seguridad($_POST["rut"]);
  $rut = $rut+0;  //ahora rut es un entero
  $email = funcion_seguridad($_POST["email"]);
  $region = funcion_seguridad($_POST["region"]);
  $comuna = funcion_seguridad($_POST["comuna"]);
  $candidato = funcion_seguridad($_POST["candidato"]);
  $como = funcion_seguridad($_POST["como"]);
}

//Por seguridad se hacen estas cosas, para que funcione basta con htmlespcialchars
function funcion_seguridad($data) {
  //$data = trim($data);                //quita caracteres como espacios,tab,saltos de linea 
  //$data = stripslashes($data);        //quita barras invertidas que pueda agregar un hacker
  $data = htmlspecialchars($data);      //cambia caracteres como < por &lt; convierte caracteres especiales html 
  return $data;
}

//retornando al front
echo "Recibido en el servidor:";
echo $nombre." ".$alias." ".$rut." ".$email." ".$region." ".$comuna." ".$candidato." ".$como;

//Conexion a base de datos (faltaria modularizar)
  $servername="localhost";
	$username= "";
	$password = "";
  $dbname = 'formulario_de_votacion';

// Create connection, como si fuese un objeto
   $con = new mysqli($servername, $username, $password,$dbname); //o   mysqli_connect($servername,$username,$password);

	//Check connection 
	if ($con) {  //o  if(!$con)
		echo "Connection falladisima: " . $con->connect_error;
	}
	print "Conectados\n";

  //guardo los valores en la tabla
$sql="insert into votantes(nombre, alias, rut, email, region, comuna, candidato, como) values ('$nombre','$alias','$rut','$email','$region','$comuna','$candidato','$como')";

if ($con->query($sql) === TRUE) {
  echo "valores agregados con exito\n";
} 

$con->close();

?>