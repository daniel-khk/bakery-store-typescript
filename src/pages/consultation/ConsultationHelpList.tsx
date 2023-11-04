import styles from './ConsultationHelpList.module.scss';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ConsultationHelpList = () => {
	// Custom hooks for handling scroll animations
	const { ref: headerRef, playAnimation: isHeaderVisible } = useScrollAnimation();
	const { ref: listRef, playAnimation: isListVisible } = useScrollAnimation();

	return (
		<div className={styles.consultationHelpListContainer}>
			{/* Help You With title */}
			<h3 className={`${isHeaderVisible ? styles.headerAnimation : ''}`} ref={headerRef}>
				A Holistic Nutritionist Can Help You With:
			</h3>

			{/* Help You With list */}
			<div className={`${styles.textList} ${isListVisible ? styles.textListAnimation : ''}`} ref={listRef}>
				<ul>
					<li>Allergies</li>
					<li>Digestive Disorders</li>
					<li>Inflammation</li>
					<li>Diabetes</li>
					<li>High Blood Pressure or Cholesterol</li>
					<li>Skin Problems</li>
					<li>Infertility</li>
					<li>Muscular Problems</li>
				</ul>
				<ul>
					<li>Fatigue or Low Energy</li>
					<li>Weight Concerns</li>
					<li>Depression</li>
					<li>Hormonal Imbalances</li>
					<li>Insomnia</li>
					<li>Candida or Yeast Overgrowth</li>
					<li>Stress or Anxiety</li>
					<li>and much more!</li>
				</ul>
			</div>
		</div>
	)
}

export default ConsultationHelpList;