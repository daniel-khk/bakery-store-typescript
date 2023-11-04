import React from 'react'
import styles from './Title.module.scss';

interface TitleProps {
	label: string;
}

const Title: React.FC<TitleProps> = ({ label }) => {
	return (
		<div className={styles.title}>
			<h2>{label}</h2>
		</div>
	)
}

export default Title;