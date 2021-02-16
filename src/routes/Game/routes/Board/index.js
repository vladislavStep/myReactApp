import { useState, useContext, useEffect } from 'react';
import { PokemonContext } from '../../../../context/pokemonContext';
import { useHistory } from 'react-router-dom';

import PokemonCard from '../../../../components/PokemonCard';
import style from './style.module.css';
import PlayerBoard from './component/PlayerBoard';
import { PokemonContextEnemy } from '../../../../context/pokemonContextEnemy';

const counterWin = (board) => {
	let player2Count = 0;
	let player1Count = 0;
	board.forEach(item => {
		if (item.card.possession === 'red') {
			player2Count++;
		}
		if (item.card.possession === 'blue') {
			player1Count++;
		}
	});

	return [player1Count, player2Count];
}

const BoardPage = () => {
	const pokemonContext = useContext(PokemonContext);
	const pokemonContextEnemy = useContext(PokemonContextEnemy);
	const [board, setBoard] = useState([]);
	// console.log("123: ", pokemonContext.pokemon);
	const [player1, setPlayer1] = useState(() => {
		return Object.values(pokemonContext.pokemon).map(item => ({
			...item,
			possession: 'blue',
		}))
	});
	const [player2, setPlayer2] = useState([]);
	const [choiceCard, setChoiceCard] = useState(null);

	const [steps, setSteps] = useState(0);

	const history = useHistory();

	if (Object.keys(pokemonContext.pokemon).length < 5) {
		history.replace('/game');
	}

	// console.log("###", player1);
	useEffect(async () => {
		const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
		const boardRequest = await boardResponse.json();

		setBoard(boardRequest.data);

		const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
		const player2Requenst = await player2Response.json();

		pokemonContextEnemy.onClickHandle(player2Requenst.data);
		setPlayer2(() => {
			return player2Requenst.data.map((item) => ({
				...item,
				possession: 'red',
			}));
		});


	}, []);

	const handleClickBoardPlate = async (position) => {
		// console.log('POSITION:', position);
		// console.log('##: choiceCard', choiceCard);
		if (choiceCard) {
			const params = {
				position,
				card: choiceCard,
				board,
			};
			const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(params),
			});

			const request = await res.json();

			// console.log('####: request', request);
			if (choiceCard.player === 1) {
				setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id));
			}

			if (choiceCard.player === 2) {
				setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id));
			}

			setBoard(request.data);
			setSteps(prevState => {
				const count = prevState + 1;
				return count;
			})
		}
	}

	useEffect(() => {
		if (steps == 9) {

			const [count1, count2] = counterWin(board);
			// console.log(count1, count2);
			if (count1 > count2) {
				alert('WIN');
			} else if (count1 < count2) {
				alert('LOSE');
			} else {
				alert('DRAW');
			}

			history.replace('/game/finish');


		}

	}, [steps]);


	// board.map(item => {
	// 	console.log('board:', item.position);
	// })
	// console.log("###1: ", pokemonContext.pokemon);


	return (
		<div className={style.root}>
			<div className={style.playerOne}>
				<PlayerBoard
					player={1}
					card={player1}
					onClickCard={(card) => setChoiceCard(card)}
				/>
			</div>
			<div className={style.board}>
				{
					board.map(item => (
						<div
							key={item.position}
							className={style.boardPlate}
							onClick={() => !item.card && handleClickBoardPlate(item.position)}
						>
							{
								item.card && <PokemonCard
									{...item.card}
									minimize={true}
									isSelected={false}
									isActive={true}
									className={style.cardBoard} isActive minimize={true} />
							}
						</div>
					))
				}
			</div>
			<div className={style.playerTwo}>
				<PlayerBoard
					player={2}
					card={player2}
					onClickCard={(card) => setChoiceCard(card)}
				/>
			</div>
		</div >
	);
};

export default BoardPage;