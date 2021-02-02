
import { React, useState } from 'react';
import cn from "classnames";
import style from './style.module.css';

const Navbar = ({ onClickMenu }) => {
	const [isActive, setActive] = useState(true);

	const handleClick = () => {

		if (isActive) {
			setActive(false);
		} else {
			setActive(true);
		}
		onClickMenu && onClickMenu(!isActive);
	}

	return (

		<nav id={style.navbar}>
			<div className={style.navWrapper}>
				<p className={style.brand}>
					POKEMON GAME
    			</p>
				<a className={cn(style.menuButton, !isActive ? style.active : style.deactive)} onClick={handleClick}>
					<span />
				</a>
			</div>
		</nav >
	);
};

export default Navbar;


