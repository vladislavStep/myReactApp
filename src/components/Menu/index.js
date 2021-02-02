

import cn from 'classnames';

import style from './style.module.css';

const Menu = () => {
	// const handleClick = () => {
	// 	onClickMenu && onClickMenu(true);
	// }
	return (
		<div class={cn(style.menuContainer, style.active)}>
			<div class={style.overlay} />
			<div class={style.menuItems}>
				<ul>
					<li>
						<a href="#welcome">
							HOME
        				</a>
					</li>
					<li>
						<a href="#game">
							GAME
        				</a>
					</li>
					<li>
						<a href="#about">
							ABOUT
        				</a>
					</li>
					<li>
						<a href="#contact">
							CONTACT
        				</a>
					</li>
				</ul>
			</div>
		</div>
	);
};



export default Menu;