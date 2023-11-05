import React, { useState } from 'react'
import styles from './ItemPopup.module.scss';


interface ItemPopupProps {
	item: KetoItemType;
	show: boolean;
	onHide: HideHandler;
}

const ItemPopup: React.FC<ItemPopupProps> = (props) => {
	const { productInfo = [], ingredients = [], careInstruction = '' } = props.item;
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsClosing(false);
			props.onHide();
		}, 400); // Set the timeout duration to match the animation duration (0.4s)
	};

	const closeButton = () => {
		return (
			<button className={`${styles.closeButton}`} onClick={handleClose}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		)
	}

	return (
		<section className={`${styles.itemPopup} ${styles.itemPopupAnimation} ${isClosing ? styles.closePopupAnimation : ''}`}>
			<div className={styles.itemPopupContent}>
				{/* Item image */}
				<div className={styles.imageBox}>
					<img src={props.item.img} alt="Item Image" loading="lazy" />
				</div>
				{/* Item information */}
				<div className={styles.textBox}>
					<div className={styles.textDescription}>
						<h3>Product Information</h3>
						<ul className={styles.textContent}>
							{productInfo.map((item, i) => {
								return (
									<li key={i}>{item}</li>
								)
							})}
						</ul>
					</div>
					<div className={styles.textDescription}>
						<h3>Ingredients</h3>
						<div className={styles.textContent}>
							{ingredients.map((item, i, arr) => {
								return (
									<span key={i}>
										{item}
										{i !== arr.length - 1 && <span>, </span>}
									</span>
								)
							})}
						</div>
					</div>
					<div className={`${styles.textDescription} ${styles.noBorder}`}>
						<h3>Care Instruction</h3>
						<div className={styles.textContent}>
							<p>{careInstruction}</p>
						</div>
					</div>
				</div>
				{/* Close button for web view */}
				<div className={styles.webActive}>{closeButton()}</div>
			</div>
			{/* Close button for mobile view */}
			<div className={styles.mobileActive}>{closeButton()}</div>
			{/* Background dark shade */}
			<div className={`${styles.popupBackground} ${styles.itemPopup}`} onClick={props.onHide}></div>
		</section>
	)
}

export default ItemPopup;