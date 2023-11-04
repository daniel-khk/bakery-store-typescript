import React from 'react'
import styles from './ConsultationCard.module.scss';
import useScrollAnimation from '../../hooks/useScrollAnimation';

interface ConsultationCardProps {
	service: ConsultItemType;
}

const ConsultationCard: React.FC<ConsultationCardProps> = ({ service }) => {
	// Replace line breaks in title and content with <br /> for rendering HTML
	const titleWithLineBreaks = service.title.replace(/\n/g, '<br />');
	const contentWithLineBreaks = service.content.replace(/\n/g, '<br />');

	// Check if the card is even or odd based on its ID
	const isEven = service.id % 2 === 0;

	// Custom hook for handling scroll animation
	const { ref: cardRef, playAnimation: isCardVisible } = useScrollAnimation();

	return (
		<div className={`${styles.cardContainer} ${isCardVisible ? styles.cardContainerAnimation : ''}`} ref={cardRef}>
			<div className={`${styles.imageBox} ${isEven ? styles.right : ''}`}>
				<img src={service.img} alt="Image" loading="lazy" />
			</div>
			<div className={`${styles.textBox} ${isEven ? styles.left : ''}`}>

				{/* Render title with line breaks */}
				<h4 dangerouslySetInnerHTML={{ __html: titleWithLineBreaks }} />

				{/* Render content with line breaks */}
				<p dangerouslySetInnerHTML={{ __html: contentWithLineBreaks }} />

				<p>{service.sub}</p>

				<p>${service.price.toFixed(2)}</p>
			</div>
		</div>
	)
}

export default ConsultationCard;