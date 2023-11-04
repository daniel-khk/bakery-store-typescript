import { useState, ChangeEvent } from 'react'
import styles from './ContactForm.module.scss';
import Form from 'react-bootstrap/Form';
import ContactModal from './ContactModal';

const ContactForm = () => {
	// Initial form data state
	const initialFormData: FormDataType = {
		email: '',
		userName: '',
		subject: '',
		message: '',
	};

	const [formData, setFormData] = useState<FormDataType>(initialFormData);
	const { email, userName, subject, message } = formData;
	const [isValid, setIsValid] = useState(false);
	const [isButtonClicked, setIsButtonClicked] = useState(false);

	// Handle form input
	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Handle form validation
	const validation = () => {
		if (email.trim() && userName.trim() && subject.trim() && message.trim() !== '') {
			setIsValid(true);
			setFormData(initialFormData);
			setIsButtonClicked(false);
		} else {
			setIsValid(false);
			setIsButtonClicked(true);
		}
	}

	// Display empty field alert message
	const emptyFieldAlert = (value: string) => {
		return (
			<Form.Text className={styles.formText}>
				{isButtonClicked && !value.trim() && '* Please fill out this field.'}
			</Form.Text>
		)
	}

	return (
		<section className={styles.contactForm}>
			<Form className={styles.formContainer}>

				{/* Email input */}
				<Form.Group className={styles.formGroup} controlId="formEmail">
					<Form.Label className={styles.formLabel}>Email</Form.Label>
					<Form.Control
						type="email"
						name="email"
						value={email}
						onChange={handleChange}
						size="lg"
						className={`form-control ${styles.formControl}`}
						placeholder="Enter your email"
					/>
					{emptyFieldAlert(email)}
				</Form.Group>

				{/* Name input */}
				<Form.Group className={styles.formGroup} controlId="formUserName">
					<Form.Label className={styles.formLabel}>Name</Form.Label>
					<Form.Control
						type="text"
						name="userName"
						value={userName}
						onChange={handleChange}
						size="lg"
						className={`form-control ${styles.formControl}`}
						placeholder="Enter your name"
					/>
					{emptyFieldAlert(userName)}
				</Form.Group>

				{/* Subject input */}
				<Form.Group className={styles.formGroup} controlId="formSubject">
					<Form.Label className={styles.formLabel}>Subject</Form.Label>
					<Form.Control
						type="text"
						name="subject"
						value={subject}
						onChange={handleChange}
						size="lg"
						className={`form-control ${styles.formControl}`}
						placeholder="Enter subject"
					/>
					{emptyFieldAlert(subject)}
				</Form.Group>

				{/* Message input */}
				<Form.Group className={styles.formGroup} controlId="formMessage">
					<Form.Label className={styles.formLabel}>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={6}
						name="message"
						value={message}
						onChange={handleChange}
						size="lg"
						className={`form-control ${styles.formControl}`}
						placeholder="Enter message"
					/>
					{emptyFieldAlert(message)}
				</Form.Group>
			</Form>

			{/* Submit button */}
			<div className={styles.submitButton}>
				<input type="submit" value="Submit" onClick={() => validation()} />
			</div>

			{/* Display modal when form is successfully submitted */}
			{isValid && <ContactModal show={isValid} onHide={() => setIsValid(false)} />}
		</section>
	)
}

export default ContactForm;