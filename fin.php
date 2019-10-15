<?php
include 'bd/conecta.php';
$query = mysql_query("INSERT INTO rating VALUES('','".$_GET["time"]."','".$_GET["name"]."','".$_GET["dx"]."','".$_GET["dy"]."')");
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Game Pipes!</title>
	<link rel="stylesheet" type="text/css" href="css.css">
</head>
<body>
	<div id="juego">
		<h1>Has ganado!</h1>
		<button onclick="location.href = 'index.php'">Otra vez!</button>
		<div class="puntos">
			<h1>Puntos en la categor&iacute;a <?php echo $_GET["dx"] ?>x<?php echo $_GET["dy"] ?></h1>
			<table id="rank">
				<tr>
					<th>Nombre</th>
					<th>Tiempo</th> 
				</tr>
				<?php
				$r= mysql_query("SELECT name, tiempo FROM rating WHERE x=".$_GET["dx"]." and y=".$_GET["dy"]." ORDER BY tiempo LIMIT 5");
				if (!$r) {
					echo "No se pudo ejecutar con exito la consulta ($sql) en la BD: " . mysql_error();
					exit;
				}
				while ($fila = mysql_fetch_assoc($r)) {
					echo "<tr><td>".$fila["name"]."</td><td>".$fila["tiempo"]."</td></tr>";
				}
				?>
			</table>
		</div>
	</div>
</body>
</html>
