
import { React, useState } from 'react';
import GamePage from './routes/Game';
import HomePage from './routes/Home';

import './App.css';

const App = () => {
	const [page, setPage] = useState('app');
	const handelChangePage = (page) => {
		console.log("###: <Main />")
		setPage(page);
	}
	switch (page) {
		case 'app':
			return <HomePage onChangePage={handelChangePage} />
		case 'game':
			return <GamePage onChangePage={handelChangePage} />
		default:
			return <HomePage />
	}
};
export default App;