	<!DOCTYPE HTML>
<html>
	
	
	<head>
		<title>EduCode</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link href="images/favicon.ico" rel="icon" type="image/x-icon" />
		<script src="assets/js/createjs.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min.js"></script>
		<script src="assets/js/angular-drag-and-drop-lists.js"></script>
		<script src="framework/vendor/prism.js"></script>
		<script src="framework/demo-framework.js"></script>
		<script src="dragdroptouch.js"></script>
		<script src="assets/js/globalLevel.js"></script>
		<script type="text/javascript" src="http://www.shawnolson.net/scripts/public_smo_scripts.js"></script>
		<script src='https://code.responsivevoice.org/responsivevoice.js'></script>
		<link rel="stylesheet" href="framework/vendor/bootstrap.min.css">
		<link rel="stylesheet" href="framework/vendor/bootstrap-theme.min.css">
		<link rel="stylesheet" href="framework/vendor/prism.css">
		<link rel="stylesheet" href="framework/demo-framework.css">
		<link rel="stylesheet" href="framework/vendor/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="levels/level.css" />
		
		<?php 
			if (isset($_GET['level']))
			{
				$level = $_GET['level'];
				echo '<script src="levels/'.$level.'.js"></script>';
			}
		?>
		<link rel="stylesheet" href="assets/css/override.css" />
		
	</head>
	<body>
		<header id="header" class="container">

			<!-- Logo -->
				<div id="logo">
					<div class="flex-item">
						<a href="index.php"><img src="images/ORIGINAL/mascotte.png" width="100px"></a>
					</div>
					<div class="flex-item">
						<h1><a href="index.php">EduCode</a></h1>
					</div>
				</div>

			<!-- Nav -->
				<nav id="nav">
					<ul>
						<li><a href="index.php">Welcome</a></li>
						<li>
							<a href="#">Gioca!</a>
							<ul>
								<li><a href="gameplay.php?level=level1">livello 1</a></li>
								<li><a href="gameplay.php?level=level2">livello 2</a></li>
								<li><a href="gameplay.php?level=level3">livello 3</a></li>
							</ul>
						</li>
						<li><a href="info.php#come">Come giocare</a></li>
						<!--<li><a href="left-sidebar.html">Left Sidebar</a></li>
						<li><a href="right-sidebar.html">Right Sidebar</a></li>
						<li><a href="no-sidebar.html">No Sidebar</a></li>-->
					</ul>
				</nav>

		</header>
		