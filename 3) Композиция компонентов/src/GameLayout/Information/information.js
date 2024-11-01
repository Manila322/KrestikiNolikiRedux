import React from 'react';

export const Information = ({ status, currentPlayer }) => {
	let statusMessage;
	switch (status) {
		case 0:
			statusMessage =
				'Теперь ход игрока: ' + (currentPlayer === 0 ? 'Крестик' : 'Нолик');
			break;
		case 1:
			statusMessage =
				'Победил игрок: ' + (currentPlayer === 0 ? 'Крестик' : 'Нолик');
			break;
		case 2:
			statusMessage = 'Ничья!';
			break;
		default:
			break;
	}

	return <div>{statusMessage}</div>;
};
