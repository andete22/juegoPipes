<html>
<head>
	<title>Game Pipes!</title>	
	<link rel="stylesheet" href="css.css">
	<script type="text/javascript" src="js.js"></script>
</head>
<body>
	<div id="time"></div>
	<div id="juego">
		<h1>Game Pipes!</h1>
		<label for="py">Alto</label>
		<input name="py" id="py" value="10" type="number" max="20" min="3"><br>
		<label for="px">Ancho</label>
		<input name="px" id="px" value="10" type="number" max="20" min="3"><br>
		<label for="name">Nombre</label>
		<input name="name" id="name" type="text"><br>
		<button onclick="javascript:crearTablero()">Play!</button>
	</div>
</body>
</html>