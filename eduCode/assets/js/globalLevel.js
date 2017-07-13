/* Variabili globali JS per la gestione dei livelli */
var omino = "";
var ominoBox = "";
var chewing = "";
var delayValue = 0;
var resultType = 0;
var imgCaramelle = [];

function checkLevel(){

	var query = window.matchMedia("(orientation:landscape)");
    	if(!query.matches){
		var elem = document.getElementById("animation");
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
		screen.orientation.lock('landscape').then(null, function(error) {
			exitFullscreen();
		});
		
	}
	setTimeout(function(){
	if(!imgCaramelle.length){
		for(var i = 0; i < caramelle.length; i++){
			imgCaramelle[i] = document.createElement('img');
			imgCaramelle[i].src = 'images/caramella2.png';
			document.getElementById(caramelle[i]).appendChild(imgCaramelle[i]);
			imgCaramelle[i].style.display = "block";
		}
	}
	for(var i = 0; i < caramelle.length; i++){
		imgCaramelle[i].style.display = "block";
	}
		
	document.getElementById('result').style.display = "none";
		
	$('#animation').fadeIn(1000);
		
	ominoBox = document.getElementById('ominoBox');
	omino = document.getElementById('omino');
	chewing = document.getElementById('chewing');
	resultType = 0;
	window.requestAnimationFrame(getPosition);
	
	var widthOminoBox = document.getElementById('ominoBox').offsetWidth;
	var widthFlexContainer = document.getElementById('flexContainer').offsetWidth;
	var heightFlexContainer = document.getElementById('flexContainer').offsetHeight;
	document.querySelector(".omino").className = "omino";
	
	var partenza = widthOminoBox*8/100;
	var passo = widthFlexContainer*20/100;
	var contatore = 0;
	
	try {
		json = JSON.parse(json);
	}
	catch(err) {
	}
	
	var A = json.Azioni;
	var B = json.Start;
	var error = 0;
	var listOfActions = [];
	var ss = document.styleSheets;
	var keyframes = findKeyframesRule("moveLeftToRight");
	var keyframes2 = findKeyframesRule("moveLeftToRight2");
	var frameJump = findKeyframesRule("jump");
	var frameJump2 = findKeyframesRule("jump2");
	if(A.length == 0){	
		for(var j = 0; j < B.length; j++){
			
			if(B[j].type == "container"){		
				for(var i = 0; i < B[j].nRepeats; i++){
					for(var ii = 0; ii < B[j].nRepeats; ii++){
						if(B[j].columns[0].length != 0 && typeof(B[j].columns[0][ii]) != 'undefined'){
							if(B[j].columns[0][ii].name == "Passo"){		
								addAction(listOfActions, keyframes, keyframes2);
							}
							
							if(B[j].columns[0][ii].name == "Salto")
							{	
								addAction(listOfActions, frameJump, frameJump2);
							}
						}
					}
				}				
			}
			else{
				if(B[j].name == "Passo"){
					addAction(listOfActions, keyframes, keyframes2);
				}
				if(B[j].name == "Salto"){
					addAction(listOfActions, frameJump, frameJump2);
				}
			}
		}	
	}
	
	for(var i = 0; i < listOfActions.length; i++){
		if(typeof listOfActions[i] === 'string')
			listOfActions.remove(i);
		
	}
	
	var animationString = "";
	var delay = "";
	delayValue = 0;
	var nRepeats = 1;
	partenza = 0;
	var step = partenza + passo;
	var stepFromStart = 0;
	for(var i = 0; i < listOfActions.length;i++){
		
		switch (listOfActions[i].name){
				
			case "moveLeftToRight":	
				var checkFlag = 0;
				for(var j = i+1; j < listOfActions.length;j++){						
					if(listOfActions[j].name == "moveLeftToRight2" ){							
						nRepeats++;
						
					}
					else{
						addPassRule(keyframes, stepFromStart*passo, (stepFromStart*passo + passo*nRepeats));
						animationString = animationString.concat(" moveLeftToRight "+(2*nRepeats)+"s forwards,");
						delay = updateDelay(delay, 2*nRepeats);
						stepFromStart++;
						checkFlag = 1;
						break;
					}							
				}
				if(checkFlag == 0){
					addPassRule(keyframes, stepFromStart*passo, (stepFromStart*passo + passo*nRepeats));
					animationString = animationString.concat(" moveLeftToRight "+(2*nRepeats)+"s forwards,");
					delay = updateDelay(delay, 2*nRepeats);
					stepFromStart++;
				}
				break;
				
			case "moveLeftToRight2":
				if(nRepeats == 1){
					addPassRule(keyframes2, stepFromStart*passo, (stepFromStart*passo + passo));
					animationString = animationString.concat(" moveLeftToRight2 2s forwards,");
					delay = updateDelay(delay, 2);
					stepFromStart ++;
				}
				break;
				
			case "jump":
				addJumpRule(frameJump, stepFromStart*passo, ( stepFromStart*passo + 2*passo), 125);
				animationString = animationString.concat(" jump 1s forwards,");
				delay = updateDelay(delay, 1.5);
				stepFromStart+=2;
				break;
				
			case "jump2": 
				addJumpRule(frameJump2,  stepFromStart*passo,  (stepFromStart*passo + 2*passo), 125);
				animationString = animationString.concat(" jump2 1s forwards,");
				delay = updateDelay(delay, 1.5);
				stepFromStart+=2;
				break;
		}
	}
	
	animationString = animationString.slice(",", -1);
	animationString = animationString.concat(";");
	delay = delay.slice(",", -2);
	delay = delay.concat(";");

	changecss('.changing','animation',animationString);
	changecss('.changing','animation-delay',delay);
	
	document.querySelector(".omino").className = "omino";
	window.requestAnimationFrame(function(time) {
		window.requestAnimationFrame(function(time) {						
			document.querySelector(".omino").className = "omino changing";
			
		});
	});	
	
	var elm=document.querySelector('.omino');	
	elm.addEventListener('animationiteration',function(e){
		if(e.elapsedTime >= (delayValue+1+(2*(nRepeats - 1))))
			showResult(resultType);
	});
	}, 1000);
	
}


function getPosition() {
	var rectCaramella = [];
	for(var i = 0; i < caramelle.length; i++){
		rectCaramella[i] = imgCaramelle[i].getBoundingClientRect();
	}
	var rectChewing = chewing.getBoundingClientRect();
	
	for(var i = 0; i < caramelle.length; i++){
		if(caramelle[i] <= 5){
			if((rectChewing.left + (rectChewing.width /2) > rectCaramella[i].left+ (rectCaramella[i].width /2) && rectChewing.left + (rectChewing.width /2) < rectCaramella[i].left + (rectCaramella[i].width/2) + 30) && rectChewing.bottom < rectCaramella[i].bottom + (rectCaramella[i].height /2)){
				imgCaramelle[i].style.display = "none";
				resultType ++;
			}
		}else{
			if((rectChewing.left + (rectChewing.width /2) > rectCaramella[i].left+ (rectCaramella[i].width /2) && rectChewing.left + (rectChewing.width /2) < rectCaramella[i].left + (rectCaramella[i].width/2) + 30) && rectChewing.bottom + (rectChewing.height /2) > rectCaramella[i].bottom + (rectCaramella[i].height /2)){
				imgCaramelle[i].style.display = "none";
				resultType ++;
			}
		}
	}
		
	window.requestAnimationFrame(getPosition);
}

function findKeyframesRule(rule)
{
	// gather all stylesheets into an array
	var ss = document.styleSheets;
	
	// loop through the stylesheets
	for (var i = 0; i < ss.length; ++i) {
		
		// loop through all the rules
		for (var j = 0; j < ss[i].cssRules.length; ++j) {
			
			// find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
			if ((ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE || ss[i].cssRules[j].type == window.CSSRule.KEYFRAMES_RULE) && ss[i].cssRules[j].name == rule)
				return ss[i].cssRules[j];
		}
	}
	return null;
}

function addPassRule(keyframe, start, stop){
	keyframe.appendRule("0% { transform: translate( " + start + "px ); }");		
	keyframe.appendRule("100% { transform: translate( " + stop + "px ); }");		
			
}

function addJumpRule(frameJump, start, stop, height){
	
	var tick = (stop - start) / 10;
	var j = 1;
	var mult = 5;
	var rapporto = 5;

	for(var i = 0; i <= 10; i++){
		if(i <= 5){
			var inc = (rapporto*(mult*mult));
			frameJump.appendRule(""+i*10+"% {transform: translate("+(start+(tick*i))+"px, "+ (-height+inc) +"px);}");	
			mult--;
		}else{	
			var inc = (rapporto*(j*j));
			frameJump.appendRule(""+i*10+"% {transform: translate("+(start+(tick*i))+"px, "+ (-height+inc) +"px);}");
			j++;
		}
		
	}

}

Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

function addAction(list, kFrame, kFrame2){
	//console.log("kFrame"+kFrame.name);
	if(list.indexOf(kFrame.name) == -1){
		list.push(kFrame,""+kFrame.name);						
	}
	else{
		list.push(kFrame2);
	}	
}

function updateDelay(delay, value){
	
	if (!delay.length){		
		delay = delay.concat("0s, ");
	}else{
		delayValue+=value;
		delay = delay.concat(""+delayValue+"s, ");
	}
	
	return delay;
}

function showResult(resultType){
	var rectOminoBox = ominoBox.getBoundingClientRect();
	var marginLeft = (rectOminoBox.right - rectOminoBox.left - 300) / 2;
	document.getElementById('result').style.marginLeft = marginLeft.toString() + "px";
	
	var $_GET = {};
	
	var query = document.location.toString().replace(/^.*?\?/, '').replace(/#.*$/, '').split('&');

	for(var i=0, l=query.length; i<l; i++) {
	   var aux = decodeURIComponent(query[i]).split('=');
	   $_GET[aux[0]] = aux[1];
	}
	
	var currentLevel = $_GET['level'];
	var currentLevel = currentLevel.slice(-1);
	
	currentLevel ++;
	
	if(currentLevel <= 3){
		var url = 'gameplay.php?level=level'+currentLevel;
	}else{
		document.getElementById('forwardButton').style.display = "none";
	}

	document.getElementById('forwardButton').onclick = function () { window.location.href=url; };
	
	if(resultType == caramelle.length)
		document.getElementById('textResult').innerHTML = "Vittoria!";
				
	else
		document.getElementById('textResult').innerHTML = "Hai perso!";
	
	var elementResult = document.getElementById("result");
	elementResult.classList.add("bounceInAnim");
	elementResult.style.display = "block";
	
}

function resetOrientation(){
	$('#animation').fadeOut(1500);
	exitFullscreen();
	screen.orientation.unlock();
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozExitFullScreen) {
    document.mozExitFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

function checkPlay(){
	try {
		json = JSON.parse(json);
	}
	catch(err) {
	}
	
	var A = json.Azioni;
	
	if(A.length == 0){	
		document.getElementById('playImg').src = "images/play_ok.png";
		document.getElementById('playImg').onclick = function () { checkLevel(); };
	}else{
		document.getElementById('playImg').src = "images/play_no.png";
		document.getElementById('playImg').onclick = function () {  };
	}
}