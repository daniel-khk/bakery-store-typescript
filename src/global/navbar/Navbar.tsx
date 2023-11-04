import styles from './Navbar.module.scss';
import NavbarMobile from './NavbarMobile';
import NavbarWeb from './NavbarWeb';


const Navbar = () => {
	return (
		<header className={styles.navbarContainer}>
			<NavbarWeb />
			<NavbarMobile />
		</header>
	)
}

export default Navbar;