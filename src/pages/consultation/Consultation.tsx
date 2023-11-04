import styles from './Consultation.module.scss';
import Title from '../../components/title/Title';
import ConsultationHelpList from './ConsultationHelpList';
import ConsultationCard from './ConsultationCard'
import consultData from '../../data/consultData';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Consultation = () => {
	const services = consultData;

	// Custom hook for handling scroll animation
	const { ref: firstCardRef, playAnimation: isFirstCardVisible } = useScrollAnimation();

	return (
		<section>
			<Title label={"consultation"} />

			<ConsultationHelpList />

			<section className={`${styles.cardContainer} ${isFirstCardVisible ? styles.cardAnimationDelay : ''}`} ref={firstCardRef}>
				{services?.map((service, i) => {
					return (
						<div className={styles.consultList} key={service.id}>
							<ConsultationCard service={service} />
						</div>
					)
				})}
			</section>
		</section>
	)
}

export default Consultation;