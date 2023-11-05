import React from 'react'
import styles from './ItemPopup.module.scss';
import Modal from 'react-bootstrap/Modal';

interface ItemPopupProps {
	item: KetoItemType;
	show: boolean;
	onHide: HideHandler;
}

const ItemPopup: React.FC<ItemPopupProps> = (props) => {
	const { productInfo = [], ingredients = [], careInstruction = '' } = props.item;

	return (
		<section className={styles.itemPopup}>
			<div className={styles.itemPopupContent}>
				<div className={styles.imageBox}>
					<img src={props.item.img} alt="Item Image" loading="lazy" />
				</div>
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
				<button className={styles.closeButton} onClick={props.onHide}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div className={`${styles.popupBackground} ${styles.itemPopup}`} onClick={props.onHide}></div>
		</section>
	)
}

export default ItemPopup;