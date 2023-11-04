import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Custom hook for scroll animation
const useScrollAnimation = () => {
	const [playAnimation, setPlayAnimation] = useState(false);
	const { ref, inView } = useInView();

	useEffect(() => {
		if (inView && !playAnimation) {
			setPlayAnimation(true);
		}
	}, [inView, playAnimation]);

	return { ref, playAnimation };
};

export default useScrollAnimation;
