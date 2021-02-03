

import cn from 'classnames';
import style from './style.module.css';



const Menu = ({ isA, onClickMenu }) => {
	const handleClick = () => {
		onClickMenu && onClickMenu(!isA);
	}
	return (
		<div className={cn(style.menuContainer, isA ? style.active : style.deactive)}>
			<div className={style.overlay} />
			<div className={style.menuItems}>
				{/* {children} */}
				<ul>
					<li>
						<a href="#welcome" onClick={handleClick}>
							HOME
        				</a>
					</li>
					<li>
						<a href="#game" onClick={handleClick}>
							GAME
        				</a>
					</li>
					<li>
						<a href="#about" onClick={handleClick}>
							ABOUT
        				</a>
					</li>
					<li>
						<a href="#contact" onClick={handleClick}>
							CONTACT
        				</a>
					</li>

				</ul>
			</div>
		</div>
	);
};



export default Menu;