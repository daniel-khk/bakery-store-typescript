import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './global/navbar/Navbar';
import Footer from './global/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Keto from './pages/keto/Keto';
import Consultation from './pages/consultation/Consultation';
import Contact from './pages/contact/Contact';

function App() {
	return (
		<div>
			<Navbar />
			<main className='main-container'>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/keto" element={<Keto />} />
					<Route path="/consultation" element={<Consultation />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App;
