// import style from './style.module.css';
import { React, useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';


const MenuHeader = ({ bgActive }) => {
	const [isOpen, setOpen] = useState(null);
	const handelClickHumburg = () => {
		setOpen(prevState => !prevState);
	};
	return (
		<>
			<Menu
				isOpen={isOpen}
				onClickHumburg={handelClickHumburg}
			/>

			<Navbar
				isOpen={isOpen}
				bgActive={bgActive}
				onClickHumburg={handelClickHumburg}
			/>


		</>
	)

};

export default MenuHeader;