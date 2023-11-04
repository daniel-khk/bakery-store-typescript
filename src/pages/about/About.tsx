import styles from './About.module.scss';
import Title from '../../components/title/Title';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const About = () => {
	// Custom hook for handling scroll animation
	const { ref: imageBoxRef, playAnimation: isImageBoxVisible } = useScrollAnimation();
	const { ref: textBoxRef, playAnimation: isTextBoxVisible } = useScrollAnimation();

	const aboutImage = require('../../assets/aboutImg/about_1.webp');

	return (
		<section className={styles.aboutContainer}>
			<Title label={"about yoona lee"} />

			<div className={styles.wrapper}>
				<div className={`${styles.imageBox} ${isImageBoxVisible ? styles.imageBoxAnimation : ''}`} ref={imageBoxRef}>
					<img src={aboutImage} alt="Image" loading="lazy" />
				</div>

				<div className={`${styles.textBox} ${isTextBoxVisible ? styles.textBoxAnimation : ''}`} ref={textBoxRef}>
					<p className={styles.textContent}>
						I am a Holistic Nutritionist who is passionate about healthy and happy living.
					</p>
					<p className={styles.textContent}>
						I am a true believer in natural medicine and its applications in the modern world and strive to educate people. I help individuals to understand their health and address the root cause of conditions that they may have. I always look to the root cause of major health issues to control, prevent, reduce and eliminate issues in the body. Each person is biochemically different and requires independent nutrition and I will help you to solve the health issues that may pertain to you.
					</p>
					<p className={styles.textContent}>
						I am also a natural skincare products formulator, selling my products in-store and online. I offer products that are exclusively handcrafted and prepared with love and passion using only clean and high-quality ingredients.
					</p>
					<br />
					<p className={styles.textContent}>
						Yours in Health and Happiness,
					</p>
					<p className={styles.textContent}>
						Yoona Lee
					</p>
				</div>
			</div>
		</section>

	)
}

export default About;