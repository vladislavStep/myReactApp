import { useRouteMatch, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { PokemonContext } from '../../context/pokemonContext';

import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

const GamePage = () => {

	const [pokemons, setPokemons] = useState([]);
	const match = useRouteMatch('/game');

	const handleClickCard = (item) => {
		pokemons[item[0]] = item[1];
		setPokemons(pokemons);
	}

	return (
		<PokemonContext.Provider value={{
			pokemon: pokemons,
			onClickHandle: handleClickCard
		}}>
			<Switch>
				<Route path={`${match.path}/`} exact component={StartPage} />
				<Route path={`${match.path}/board`} component={BoardPage} />
				<Route path={`${match.path}/finish`} component={FinishPage} />
			</Switch>
		</PokemonContext.Provider >
	);
};

export default GamePage;