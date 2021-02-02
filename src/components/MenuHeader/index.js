// import style from './style.module.css';
import { useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';


const MenuHeader = () => {
	const [menu, setMenu] = useState(true);
	const handelChangePage = (menu) => {
		setMenu(menu);
	}
	if (menu) {
		return <Navbar onClickMenu={handelChangePage} />
	} else {
		return (
			<>
				<Navbar onClickMenu={handelChangePage} />
				<Menu />
			</>
		)
	}
};

export default MenuHeader;