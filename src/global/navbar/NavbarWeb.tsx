import styles from './NavbarWeb.module.scss';
import { Link, useLocation } from "react-router-dom"
import MainLogo from '../../assets/logo_large.svg'


const NavbarWeb = () => {
	const location = useLocation();

	return (
		<nav className={styles.navbarWeb}>
			<div className={styles.navbarMenu}>
				<ul>
					<li>
						<Link to="/">home</Link>
					</li>
					<li className={`${location.pathname === '/about' ? styles.active : ''}`}>
						<Link to="/about">about</Link>
					</li>
					<li className={`${location.pathname === '/keto' ? styles.active : ''}`}>
						<Link to="/keto">keto</Link>
					</li>
					<li className={`${location.pathname === '/consultation' ? styles.active : ''}`}>
						<Link to="/consultation">consultation</Link>
					</li>
					<li className={`${location.pathname === '/contact' ? styles.active : ''}`}>
						<Link to="/contact">contact</Link>
					</li>
				</ul>
			</div>

			{/* Main logo linked to the home page */}
			<div className={styles.navLogo}>
				<a href="/"><img className={styles.mainLogo} src={MainLogo} alt="Main Logo" /></a>
			</div>
		</nav>
	)
}

export default NavbarWeb;
