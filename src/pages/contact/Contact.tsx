import styles from './Contact.module.scss';
import Title from '../../components/title/Title';
import ContactForm from './ContactForm';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Contact = () => {
	// Custom hook for handling scroll animation
	const { ref: contactInfoRef, playAnimation: isContactInfoVisible } = useScrollAnimation();
	const { ref: contactFormRef, playAnimation: isContactFormVisible } = useScrollAnimation();

	return (
		<section>
			<Title label={"contact us"} />

			<div className={styles.contactContainer}>
				{/* Contact info */}
				<div className={`${styles.contactInfo} ${isContactInfoVisible ? styles.contactInfoAnimation : ''}`} ref={contactInfoRef}>
					<p className={styles.textAddress}>3895 Bathurst St, Toronto ON, M3H 5V1</p>
					<p className={styles.textOpenHours}>Tuesday - Sunday <span>(Closed Monday)</span><br />11am - 6pm</p>
					<p className={styles.textPhone}>647 343 8200</p>
					<p className={styles.textEmail}>ketoyoona@gmail.com</p>
				</div>

				{/* Contact form */}
				<div className={`${styles.contactForm} ${isContactFormVisible ? styles.contactFormAnimation : ''}`} ref={contactFormRef}>
					<ContactForm />
				</div>
			</div>
		</section >
	)
}

export default Contact;