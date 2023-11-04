import React from 'react'
import './ItemPopup.scss';
import Modal from 'react-bootstrap/Modal';

interface ItemPopupProps {
	item: KetoItemType;
	show: boolean;
	onHide: HideHandler;
}

const ItemPopup: React.FC<ItemPopupProps> = (props) => {
	const { productInfo = [], ingredients = [], careInstruction = '' } = props.item;

	return (
		<Modal
			{...props}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className='keto-popup'
		>
			<Modal.Body>
				<div className='image-box'>
					<img src={props.item.img} alt="Item Image" loading="lazy" />
				</div>

				<div className='text-box'>
					<div className='description'>
						<h3>Product Information</h3>
						<ul className='content'>
							{productInfo.map((item, i) => {
								return (
									<li key={i}>{item}</li>
								)
							})}
						</ul>
					</div>

					<div className='description'>
						<h3>Ingredients</h3>
						<div className='content'>
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

					<div className='description noBorder'>
						<h3>Care Instruction</h3>
						<div className='content'>
							<p>{careInstruction}</p>
						</div>
					</div>
				</div>
			</Modal.Body>

			<button className='close-button' onClick={props.onHide}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</Modal>
	)
}

export default ItemPopup;