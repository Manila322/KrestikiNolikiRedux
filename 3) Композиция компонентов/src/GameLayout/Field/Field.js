import React from 'react';
import styles from './FieldLavout.module.css';

export const Field = ({ field, handleCellClick }) => {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<div
					key={index}
					className={styles.cell}
					onClick={() => handleCellClick(index)}
				>
					{cell === 0 ? 'X' : cell === 1 ? 'O' : ''}
				</div>
			))}
		</div>
	);
};
