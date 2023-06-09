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
							<a href="/about" className="nav-link">
								<strong className="d-none d-sm-block ms-1">About</strong>
							</a>
							<ul className="dropdown-content dropdown-menu">
								<li><a href="/about#overview">Overview & philosophy</a></li>
								<li><a href="/about#team">The team</a></li>
								<li><a href="/about#performance">Awards & testimonials</a></li>
							</ul>
						</li>


						<li className="nav-item dropdown" style={{float: "left"}}>
							<a href="/practices" className="nav-link">
								<strong className="d-none d-sm-block ms-1">Practice Areas</strong>
							</a>
							<ul className="dropdown-content dropdown-menu">
								<li><a href="/practices#banking">Banking law</a></li>
								<li><a href="/practices#corporate">Corporate law</a></li>
								<li><a href="/practices#labor">Labor law</a></li>
								<li><a href="/practices#litigation">Litigation</a></li>
								<li><a href="/practices#real-estate">Real estate law</a></li>
								<li><a href="/practices#tax">Tax law</a></li>
								<li><a href="/practices#administrative">Administrative law</a></li>
							</ul>
						</li>

						{/* <li className="dropdown" style={{float: "right"}}>
							<a href="#" className="nav-link">
								<strong className="d-none d-sm-block ms-1">Help</strong>
							</a>
							<ul className="dropdown-content dropdown-menu">
								<li><a href="#">Frequently asked questions</a></li>
								<li><a href="#">Book a session</a></li>
							</ul>
						</li> */}

						{/* <li className="nav-item me-3 me-lg-1">
							<a className="nav-link d-sm-flex align-items-sm-center" href="#">
								<strong className="d-none d-sm-block ms-1">Blogs</strong>
							</a>
						</li> */}

						<li className="nav-item me-3 me-lg-1">
							<a className="nav-link d-sm-flex align-items-sm-center" href="/contact">
								<strong className="d-none d-sm-block ms-1">Contact Us</strong>
							</a>
						</li>

					</ul>
				</div>
			</nav>
		</div>
	)
}