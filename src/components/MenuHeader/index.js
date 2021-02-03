// import style from './style.module.css';
import { React, useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';

// const MENU = [
// 	{
// 		'href':'#welcome',
// 		'descr':'HOME',
// 		'fun':'hendleClick'
// 	}, 
// 	{
// 		'href':'#game',
// 		'descr':'GAME',
// 		'fun':'hendleClick'
// 	},
// 	{
// 		'href':'#about',
// 		'descr':'ABOUT',
// 		'fun':'hendleClick'
// 	},
// 	{
// 		'href':'#contact',
// 		'descr':'CONTACT',
// 		'fun':'hendleClick'
// 	}
// ]
const MenuHeader = () => {
	const [isActive, setActive] = useState(false);
	const handelChangeMenu = (isActive) => {
		setActive(isActive);
	};
	return (
		<>
			<Navbar
				isA={isActive}
				onClickMenu={handelChangeMenu}
			/>
			<Menu
				isA={isActive}
				onClickMenu={handelChangeMenu}
			>
				{/* <ul>
					{
						MENU.map((item) => {
							return (	
								<li>
									<a href={item.href} onClick={}>
										{item.descr}
									</a>
								</li>
							);
						})
					}
				</ul> */}
			</Menu>
		</>
	)

};

export default MenuHeader;