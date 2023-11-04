import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll backs to top on new page.
// Created in jsx because the installed typescript version does not have the 'instant' behavior value.
const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant',
		});
	}, [pathname]);

	return null;
}

export default ScrollToTop;
