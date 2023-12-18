import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import App from './App';
import AboutMePage from './pages/AboutMePage';
import ContactMePage from './pages/ContactMePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogCarousel from './components/BlogCarousel';
import BurgerMenu from './components/BurgerMenu';
import './index.css';

const Main = () => {
    const showAlert = () => {
        alert('You clicked me!');
    };

    return (
        <Router>
            <BurgerMenu />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact Me</Link>
            </nav>
            <button onClick={showAlert}>Click Me</button>
            <BlogCarousel />

            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<AboutMePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactMePage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

ReactDOM.render(<Main />, document.getElementById('root'));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
