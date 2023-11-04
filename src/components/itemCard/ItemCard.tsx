import React, { useState } from 'react'
import styles from './ItemCard.module.scss';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import ItemPopup from '../itemPopup/ItemPopup';

interface ItemCardProps {
	item: KetoItemType;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
	// Custom hook for handling scroll animation
	const { ref: itemRef, playAnimation: isItemVisible } = useScrollAnimation();

	const [isPopup, setIsPopup] = useState(false);

	const cardClick = () => {
		setIsPopup(true);
	}

	return (
		<>
			{/* Item card with scroll animation */}
			<div className={`${styles.itemCardContainer} ${isItemVisible ? styles.itemCardAnimation : ''}`} ref={itemRef} onClick={cardClick}>

				<div className={styles.imageBox}>
					<img src={item.img} alt="Item Image" loading="lazy" />
				</div>

				<div className={styles.textBox}>
					<h3>{item.name}</h3>
					<h4>${item.price.toFixed(2)}</h4>
				</div>
			</div>

			{/* Render the popup when isPopup is true */}
			{isPopup && <ItemPopup item={item} show={isPopup} onHide={() => setIsPopup(false)} />}
		</>
	)
}

export default ItemCard;