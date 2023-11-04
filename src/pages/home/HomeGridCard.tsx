import React, { useState } from 'react'
import styles from './HomeGridCard.module.scss';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import ItemPopup from '../../components/itemPopup/ItemPopup';

interface HomeGridCardProps {
	item: KetoItemType;
}

const HomeGridCard: React.FC<HomeGridCardProps> = ({ item }) => {
	// Custom hook for handling scroll animation
	const { ref: itemRef, playAnimation: isItemVisible } = useScrollAnimation();

	const [isBestItemPopup, setIsBestItemPopup] = useState(false);

	const bestItemCardClick = () => {
		setIsBestItemPopup(true);
	}

	return (
		<>
			{/* Best sellers item card with scroll animation */}
			<div className={`${styles.homeGridCardContainer} ${styles[`gridItem${item.id}`]} ${isItemVisible ? styles.homeGridAnimation : ''}`} ref={itemRef} key={item.id} onClick={bestItemCardClick}>

				<img src={item.img} alt="Item Image" loading="lazy" />

				<div className={styles.textBox}>
					<span className={styles.text}>{item.name}</span>
				</div>
			</div>

			{/* Render the item popup when isBestItemPopup is true */}
			{isBestItemPopup && <ItemPopup item={item} show={isBestItemPopup} onHide={() => setIsBestItemPopup(false)} />}
		</>
	)
}

export default HomeGridCard;