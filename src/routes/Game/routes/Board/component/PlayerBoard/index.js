import { React, useState } from 'react';

import PokemonCard from '../../../../../../components/PokemonCard';
import cn from 'classnames';
import style from './style.module.css';


const PlayerBoard = ({ player, card, onClickCard }) => {
	const [isSelected, setSelected] = useState(null);
	// console.log("###: ", card);
	return (
		<>
			{
				Object.entries(card).map(([keyID, item]) =>
					<div
						className={cn(style.cardBoard, {
							[style.selected]: isSelected === item.id
						})}
						onClick={() => {
							setSelected(item.id);
							onClickCard && onClickCard({
								player,
								...item,
							});
						}}
					>
						< PokemonCard
							keyID={keyID}
							name={item.name}
							img={item.img}
							id={item.id}
							type={item.type}
							values={item.values}
							minimize={true}
							isSelected={false}
							isActive={true}
							className={style.card}
						/>
					</div>
				)
			}
		</>
	);
};


export default PlayerBoard
