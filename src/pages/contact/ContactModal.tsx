import React from 'react'
import './ContactModal.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ContactModalProps {
	show: boolean;
	onHide: HideHandler;
}

const ContactModal: React.FC<ContactModalProps> = (props) => {
	return (
		<Modal
			{...props}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className='contact-modal'
		>
			<Modal.Body>
				<p>
					Thank you for contacting Yoona's Kitchen!<br />
					We will get back to you soon.
				</p>

				{/* Close button */}
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Body>
		</Modal>
	)
}

export default ContactModal;