import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom/dist';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<h1>hola</h1>
		</BrowserRouter>
	);
};

export default App;
