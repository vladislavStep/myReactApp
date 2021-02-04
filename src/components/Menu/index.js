import { Link } from 'react-router-dom';

import cn from 'classnames';
import style from './style.module.css';

const MENU = [{
	title: 'HOME',
	to: ''
},
{
	title: 'GAME',
	to: "game"
},
{
	title: 'ABOUT',
	to: "about"
},
{
	title: 'CONTQCT',
	to: "contact"
}]

const Menu = ({ isOpen, onClickHumburg }) => {
	// const handleClick = () => {
	// 	onClickHumburg && onClickHumburg(!isOpen);
	// }
	return (
		<div className={cn(style.menuContainer, {
			[style.active]: isOpen === true,
			[style.deactive]: isOpen === false
		})}>
			<div className={style.overlay} />
			<div className={style.menuItems}>
				<ul>
					{
						MENU.map(({ title, to }, index) => (
							<li key={index}>
								<Link to={to} onClick={onClickHumburg}>
									{title}
								</Link>
							</li>
						))
					}
				</ul>
			</div>
		</div >
	);
};

export default Menu;