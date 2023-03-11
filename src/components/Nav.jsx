import { NavLink } from 'react-router-dom'

import './Nav.css'

export default function Nav() {
	return(
		<div className="my-nav">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid justify-content-between">
					<div className="d-flex">
						<a className="navbar-brand me-2 mb-1 d-flex align-items-center" href="/">
							<span className="nav-title"> 
								<strong>Elizabeth Wangari <br/> & Co. Advocates</strong>
							</span>
						</a>
					</div>

					<ul className="navbar-nav flex-row">
						<li className="nav-item dropdown" style={{float: "right"}}>
							<a href="#" className="nav-link">
								<strong className="d-none d-sm-block ms-1">About</strong>
							</a>
							<ul className="dropdown-content dropdown-menu">
								<li><a href="#">Overview & philosophy</a></li>
								<li><a href="#">The team</a></li>
								<li><a href="#">Awards & testimonials</a></li>
							</ul>
						</li>


						<li className="nav-item dropdown" style={{float: "left"}}>
							<a href="#" className="nav-link">
								<strong className="d-none d-sm-block ms-1">Practice Areas</strong>
							</a>
							<ul className="dropdown-content dropdown-menu">
								<li><a href="#">Banking law</a></li>
								<li><a href="#">Corporate law</a></li>
								<li><a href="#">Labor law</a></li>
								<li><a href="#">Litigation</a></li>
								<li><a href="#">Real estate law</a></li>
								<li><a href="#">Tax law</a></li>
								<li><a href="#">Administrative law</a></li>
							</ul>
						</li>

						<li className="dropdown" style={{float: "right"}}>
							<a href="#" className="nav-link">
								<strong className="d-none d-sm-block ms-1">Help</strong>
							</a>
							<ul className="dropdown-content dropdown-menu">
								<li><a href="#">Frequently asked questions</a></li>
								<li><a href="#">Book a session</a></li>
							</ul>
						</li>

						<li className="nav-item me-3 me-lg-1">
							<a className="nav-link d-sm-flex align-items-sm-center" href="#">
								<strong className="d-none d-sm-block ms-1">Blogs</strong>
							</a>
						</li>

						<li className="nav-item me-3 me-lg-1">
							<a className="nav-link d-sm-flex align-items-sm-center" href="#">
								<strong className="d-none d-sm-block ms-1">Contact Us</strong>
							</a>
						</li>

					</ul>
				</div>
			</nav>
		</div>
	)
}