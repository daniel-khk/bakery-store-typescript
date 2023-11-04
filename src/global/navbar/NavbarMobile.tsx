import styles from './NavbarMobile.module.scss';
import { Link, useLocation } from "react-router-dom"
import MainLogo from '../../assets/logo_large.svg'
import { useState } from 'react';

const NavbarMobile = () => {
	const location = useLocation();
	const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);

	const openSlideMenu = () => {
		setIsSlideMenuOpen(true);
		document.body.style.overflow = "hidden";
	}

	const closeSlideMenu = () => {
		setIsSlideMenuOpen(false);
		document.body.style.overflow = "unset";
	}

	const slideMenuOpenIcon = () => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>
		)
	}

	const slideMenuCloseIcon = () => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-8 h-8">
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		)
	}

	return (
		<div className={styles.navbarMobile}>
			<nav className={styles.mobileMenu}>
				{/* Main logo linked to the home page */}
				<div className={styles.navLogo}>
					<a href="/"><img className={styles.mainLogo} src={MainLogo} alt="Main Logo" /></a>
				</div>

				{/* Menu icon that opens and closes slide menu */}
				<div className={styles.slideMenuIcon} onClick={() => {
					!isSlideMenuOpen ? openSlideMenu() : closeSlideMenu()
				}}>
					{!isSlideMenuOpen ? slideMenuOpenIcon() : slideMenuCloseIcon()}
				</div>
			</nav>

			{/* Slide menu */}
			<nav className={`${styles.slideMenu} ${isSlideMenuOpen ? styles.slide : ''}`}>
				<ul>
					<li onClick={() => { closeSlideMenu() }}>
						<Link to="/">home</Link>
					</li>
					<li className={`${location.pathname === '/about' ? styles.active : ''}`} onClick={() => { closeSlideMenu() }}>
						<Link to="/about">about</Link>
					</li>
					<li className={`${location.pathname === '/keto' ? styles.active : ''}`} onClick={() => { closeSlideMenu() }}>
						<Link to="/keto">keto</Link>
					</li>
					<li className={`${location.pathname === '/consultation' ? styles.active : ''}`} onClick={() => { closeSlideMenu() }}>
						<Link to="/consultation">consultation</Link>
					</li>
					<li className={`${location.pathname === '/contact' ? styles.active : ''}`} onClick={() => { closeSlideMenu() }}>
						<Link to="/contact">contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default NavbarMobile;