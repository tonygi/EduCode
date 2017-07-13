<?php include "header.php"; ?>
	<div id="animation">
		
		<div class="ominoBox" id="ominoBox">
			<div id="result">
				<h2 id="textResult"></h2>
				
				
				<figure>
					<img onclick="resetOrientation();" class="backButton" src="images/back.png" />
					<figcaption>Torna indietro</figcaption>
				</figure>
				
				
				<figure id="forwardButton">
					<img onclick="resetOrientation();" class="forwardButton"  src="images/forward.png" />
					<figcaption>Prossimo livello</figcaption>
				</figure>
				
				
			</div>	
			<div class="omino" id="omino">
				<div class="item" id="blue">
					<div class="chewing" id="chewing">
						<div class="eye left"><span></span></div>
						<div class="eye right"><span></span></div>
						<div class="mounth"></div>
						<div class="arm left"></div>
						<div class="arm right"></div>
					</div>
					<div class="shadow"></div>
				</div>
			</div>
				
			<div class="flexContainer" id="flexContainer">
				<div class="flexItem" id="1">
				 
				</div>
				<div class="flexItem" id="2">
				 
				</div>
				<div class="flexItem" id="3">
				
				</div>
				<div class="flexItem" id="4">
				
				</div>
				<div class="flexItem" id="5">
				
				</div>
				<div class="flexItem" id="6">
				
				</div>
				<div class="flexItem" id="7">
				
				</div>
				<div class="flexItem" id="8">
				
				</div>
				<div class="flexItem" id="9">
				
				</div>
				<div class="flexItem" id="10">
				
				</div>
			</div>	
		</div>
		
	</div>
	<div id="main-wrapper">
		<div class="container">
			<div class="instruction">
				<div class="talktext" id ="instruction">
					<?php 
						if (isset($_GET['level']))
						{
							$level = $_GET['level'];
							$fileText = 'levels/'.$level.'.txt';
							$myfile = fopen($fileText, "r") or die("Unable to open file!");
							echo fread($myfile,filesize($fileText));
							fclose($myfile);
						}
					?>
					<input onclick='speak()' type='button' value='🔊' id='talktextButton' />
				</div>
				
				
				<div class="solutionImage" id="solutionImage">
					<?php 
						if (isset($_GET['level']))
						{
							$level = $_GET['level'];
							echo '<img src="images/'.$level.'.jpg">';
						}
					?>
				</div>
			</div>
			
			<div ng-app="demo">		
				
				
					<div ng-view></div>
				
			</div>
			<div class="playEx">
				<div class="dropzone box box-yellow">
					<ul>
						<li><img onclick="" src="images/play_no.png" id="playImg"></li>
						<li><img onclick="location.reload();" src="images/replay.png"></li>
					</ul>
					
				</div>
			</div>
		</div>
	</div>

	
			
	<?php include "footer.php";?>
