import React, { useEffect, useState } from 'react';
import './App.css';
import { store } from './store';
import { Field } from './GameLayout/Field/Field';
import { Information } from './GameLayout/Information/information';
import { STATUS, PLAYER, WIN_PATTERNS } from './constants';

export const App = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const checkWinner = (field) => {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (field[a] !== null && field[a] === field[b] && field[a] === field[c]) {
				return field[a] === PLAYER.CROSS ? STATUS.WIN : STATUS.WIN;
			}
		}
		return field.every((cell) => cell !== null) ? STATUS.DRAW : STATUS.TURN;
	};

	const handleCellClick = (index) => {
		const newField = state.field.slice();
		if (state.status !== STATUS.TURN || newField[index] != null) return;

		newField[index] = state.currentPlayer;

		const gameStatus = checkWinner(newField);

		store.dispatch({ type: 'SET_FIELD', payload: newField });
		store.dispatch({ type: 'SET_STATUS', payload: gameStatus });
		store.dispatch({
			type: 'SET_CURRENT_PLAYER',
			payload: state.currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
		});
	};

	return (
		<div>
			<Field field={state.field} handleCellClick={handleCellClick} />
			<Information status={state.status} currentPlayer={state.currentPlayer} />
			<button onClick={() => store.dispatch({ type: 'RESTART_GAME' })}>
				Перезапустить игру
			</button>
		</div>
	);
};
