import './Footer.css'

export default function Footer() {
	return (
		<div className="my-footer">
			{/* row with 4 columns */}
			<div className="row">
				<div className="footer-col col-4" align="center">
					{/*
					<div className="footer-title">
						<h5>Column 1</h5>
					</div> */}
					
					<div className="footer-content footer-logo">
						<div className="footer-logo">
							Elizabeth Wangari & Co Advocates
						</div>
					</div>
				</div>
				<div className="footer-col col" align="center">
					{/*
					<div className="footer-title">
						<h5>Column 1</h5>
					</div> */}
					
					<div className="footer-content footer-list">
						<li><a href="#">Banking law</a></li>
						<li><a href="#">Corporate law</a></li>
					 	<li><a href="#">Labor law</a></li> 
						<li><a href="#">Litigation</a></li>
						<li><a href="#">Real estate law</a></li>
						<li><a href="#">Tax law</a></li>
						<li><a href="#">Administrative law</a></li>
					</div>
				</div>
			</div>
			<div className="footer-socials" align="center">
				<a href="#"><i className="fa-brands fa-facebook-f"></i></a>
				<a href="#"><i className="fa-brands fa-twitter"></i></a>
				<a href="https://wa.me/254724396320">
					<i className="fa-brands fa-whatsapp"></i>
				</a>
				<a href="https://www.linkedin.com/in/elizabeth-wangari-07713665/">
					<i className="fa-brands fa-linkedin"></i>
				</a>
			</div>
			<hr />
			<div className="footer-copyright" align="center">
				<p>© 2021 Elizabeth Wangari & Co Advocates. All rights reserved.</p>
			</div>
		</div>
	)
}