

import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import ReactBg1 from './assets/bg2.jpg';
import ReactBg3 from './assets/bg3.jpg';

const App = () => {
	return (
		<>
			<Header title="This is Title" descr="This is Description" />
			<Layout
				title="First Layout"
				descr="Description First Layout"
				id="first"
				urlBg={ReactBg1}
				colorBg=""
			/>
			<Layout
				title="Second Layout"
				descr="Description Second Layout"
				id="second"
				urlBg=""
				colorBg="red"
			/>
			<Layout
				title="Third Layout"
				descr="Description Third Layout"
				id="third"
				urlBg={ReactBg3}
				colorBg=""
			/>
			<Footer />
		</>
	);
}

export default App;