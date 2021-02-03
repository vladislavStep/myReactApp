

import cn from "classnames";
import style from './style.module.css';

const Navbar = ({ isA, onClickMenu }) => {
	const handleClick = () => {
		onClickMenu && onClickMenu(!isA);
	}

	return (

		<nav id={style.navbar}>
			<div className={style.navWrapper}>
				<p className={style.brand}>
					POKEMON GAME
    			</p>
				<a className={cn(style.menuButton, isA ? style.active : style.deactive)} onClick={handleClick}>
					<span />
				</a>
			</div>
		</nav >
	);
};

export default Navbar;


