// import { useState } from 'react';

import cn from 'classnames';

import style from './style.module.css';
import cardBackSide from './assets/card-back-side.jpg';



const PokemonCard = ({ keyID, name, img, id, type, values, isActive, isSelected, minimize, className, onClick, possession }) => {

	const handleClick = () => {
		onClick && onClick(keyID);
	};
	// console.log("PokemonCard:", keyID, name, img, id, type, values, isActive, isSelected, minimize, className, onClick, possession);
	return (

		<div className={cn(className, style.pokemonCard, {
			[style.active]: isActive
		}, {
			[style.selected]: isSelected
		})} onClick={handleClick}>
			<div className={style.cardFront}>
				<div className={cn(style.wrap, style.front)}>
					<div className={cn(style.pokemon, style[type], style[possession])}>
						<div className={style.values}>
							<div className={cn(style.count, style.top)}>{values.top}</div>
							<div className={cn(style.count, style.right)}>{values.right}</div>
							<div className={cn(style.count, style.bottom)}>{values.bottom}</div>
							<div className={cn(style.count, style.left)}>{values.left}</div>
						</div>
						<div className={style.imgContainer}>
							<img src={img} alt={name} />
						</div>
						{!minimize && (<div className={style.info}>
							<span className={style.number}>#{id}</span>
							<h3 className={style.name}>
								{name}
							</h3>
							<small className={style.type}>
								Type: <span>{type}</span>
							</small>
						</div>)}
					</div>
				</div>
			</div>

			<div className={style.cardBack}>
				<div className={cn(style.wrap, style.back)}>
					<img src={cardBackSide} alt="Сard Backed" />
				</div>
			</div>

		</div >

	)
}


export default PokemonCard;