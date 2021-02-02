import style from './style.module.css';

const GamePage = ({ onChangePage }) => {
	const handleClick = () => {
		onChangePage && onChangePage('app');
	}
	return (
		<div className={style.container}>
			<h1>This is Game Page!!!</h1>
			<button onClick={handleClick}>
				Come Back
			</button>
		</div>
	);
};

export default GamePage;