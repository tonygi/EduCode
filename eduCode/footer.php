			<div id="footer-wrapper">
				<footer id="footer" class="container">
					<!-- <div class="row">
						<div class="3u 6u(medium) 12u$(small)">

							Links 
								<section class="widget links">
									<h3>Random Stuff</h3>
									<ul class="style2">
										<li><a href="#">Etiam feugiat condimentum</a></li>
										<li><a href="#">Aliquam imperdiet suscipit odio</a></li>
										<li><a href="#">Sed porttitor cras in erat nec</a></li>
										<li><a href="#">Felis varius pellentesque potenti</a></li>
										<li><a href="#">Nullam scelerisque blandit leo</a></li>
									</ul>
								</section>

						</div>
						<div class="3u 6u$(medium) 12u$(small)">

							
								<section class="widget links">
									<h3>Random Stuff</h3>
									<ul class="style2">
										<li><a href="#">Etiam feugiat condimentum</a></li>
										<li><a href="#">Aliquam imperdiet suscipit odio</a></li>
										<li><a href="#">Sed porttitor cras in erat nec</a></li>
										<li><a href="#">Felis varius pellentesque potenti</a></li>
										<li><a href="#">Nullam scelerisque blandit leo</a></li>
									</ul>
								</section>

						</div>
						<div class="3u 6u(medium) 12u$(small)">

							
								<section class="widget links">
									<h3>Random Stuff</h3>
									<ul class="style2">
										<li><a href="#">Etiam feugiat condimentum</a></li>
										<li><a href="#">Aliquam imperdiet suscipit odio</a></li>
										<li><a href="#">Sed porttitor cras in erat nec</a></li>
										<li><a href="#">Felis varius pellentesque potenti</a></li>
										<li><a href="#">Nullam scelerisque blandit leo</a></li>
									</ul>
								</section>

						</div>
						<div class="3u 6u$(medium) 12u$(small)">

							
								<section class="widget contact last">
									<h3>Contact Us</h3>
									<ul>
										<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
										<li><a href="#" class="icon fa-pinterest"><span class="label">Pinterest</span></a></li>
									</ul>
									<p>1234 Fictional Road<br />
									Nashville, TN 00000<br />
									(800) 555-0000</p>
								</section>

						</div>
					</div>-->
					<div class="row">
						<div class="12u">
							<div id="copyright">
								<ul class="menu">
									<li>Maretti Alessandro & Giorgino Giuseppe</li><li>Applicazioni e servizi web</a></li>
								</ul>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
					
		<script src="assets/js/jquery.min.js"></script>
		<script src="assets/js/jquery.dropotron.min.js"></script>
		<script src="assets/js/skel.min.js"></script>
		<script src="assets/js/util.js"></script>
		<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
		<script src="assets/js/main.js"></script>
		<script>
			$(function() {
				console.log(location.pathname.split("/").pop());
				$('a[href^="' + location.pathname.split("/").pop() + '"]').parent().addClass('current');
			});
		</script>
		<script>
			function speak(){
				responsiveVoice.speak($('#instruction').text(), "Italian Female");
			}
		</script
	</body>
</html>
