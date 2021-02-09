import { useLocation, Switch, Route, Redirect } from 'react-router-dom';
import cn from 'classnames';

import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';
import NotFound from './routes/NotFound';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import style from './style.module.css';
import { FireBaseContext } from './context/firebaseContext';
import Firebase from './service/firebase';

const App = () => {

	const loc = useLocation();

	let locBool = (loc.pathname === "/" || loc.pathname === '/game/board');
	return (
		<FireBaseContext.Provider value={new Firebase()}>
			<Switch >
				<Route path="/404" render={() => (
					<h1>404 Not Found</h1>
				)} />
				<Route>
					<>
						<MenuHeader bgActive={!locBool} />
						<div className={cn(style.wrap, {
							[style.isHomePage]: locBool
						})} >
							<Switch>
								<Route path="/" exact component={HomePage} />
								{/* <Route path="/home" component={HomePage} /> */}
								<Route path="/game" component={GamePage} />
								<Route path="/about" component={AboutPage} />
								<Route path="/contact" component={ContactPage} />
								<Route path="/notFound" component={NotFound} />
								{/* <Route path="/notFound" render={() => (
								<h1>This is page About</h1>
							)} /> */}
								<Route render={() => (
									<Redirect to="/404" />
								)} />
							</Switch>

						</div>
						<Footer />
					</>
				</Route>
			</Switch >
		</FireBaseContext.Provider>
	)

};
export default App;