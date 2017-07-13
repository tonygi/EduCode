arPages = new Array (
  "index.html", "2.html", "3.html", "4.html", "5.html", "6.html", "7.html", "8.html", "9.html", "10.html", "11.html", "12.html", "13.html", "14.html", "15.html", "16.html", "17.html", "18.html", "19.html", "20.html", "21.html", "22.html", "23.html", "24.html", "25.html")
impre = "/scripts/buttons/button_"

if (document.images) {
  arImLoadB = new Array(
    impre+"left_over",
    impre+"left_down",
    impre+"right_over",
    impre+"right_down");
  arImListB = new Array ();
  for (counter in arImLoadB)
  {
    arImListB[counter] = new Image();
    arImListB[counter].src = arImLoadB[counter] + ".gif";
  }
}
function movr(){this.img.src = this.img.overSrc}
function mout(){this.img.src = this.img.outSrc}
function mdown(){this.img.src = this.img.downSrc}
function insertButtons()
{
	lr = "left"; altlr = "<";
	document.write("<p align=right>")
	for (i=0;i<numPages;i++)
  {
		if (i==curPage) { lr = "center"; altlr = "#"; }
		imstr = "<img alt='" + altlr + "' SRC='" + impre + lr + ".gif' width=18 height=18 border=0>";
		if (i==curPage) {document.write(imstr);lr="right";altlr=">";continue}
		document.write(imstr.link(arPages[i]));
		if(!ver4) continue;
		tLink =	document.links[document.links.length-1];
		tImg = tLink.img = document.images[document.images.length-1];
		tImg.outSrc = tImg.src;
		tImg.downSrc = impre + lr + "_down.gif";
		tImg.overSrc = impre + lr + "_over.gif";
		tLink.onmouseover = movr;
		tLink.onmouseout = tLink.onmouseup = mout;
		tLink.onmousedown = mdown;
	}

}