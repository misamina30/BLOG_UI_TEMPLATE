import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import Navbar from './components/navbar/navbar';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Write from './pages/write';
import Login from './pages/login';
import Register from './pages/register';
import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/write' element={<Write />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
