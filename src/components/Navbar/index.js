

import cn from "classnames";
import style from './style.module.css';

const Navbar = ({ isOpen, bgActive , onClickHumburg }) => {
	
	return (

		<nav className={cn(style.navbar, {
			[style.bgActive]: bgActive
		})}>
			<div className={style.navWrapper}>
				<p className={style.brand}>
					POKEMON GAME
    			</p>
				<div className={cn(style.menuButton, {
					[style.active]: isOpen === true,
					[style.deactive]: isOpen === false
				})} onClick={onClickHumburg}>
					<span />
				</div>
			</div>
		</nav >
	);
};

export default Navbar;


