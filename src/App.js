import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Nav />
       <HomePage />
       <BookingPage />
       <Footer />
       
    </div>
  );
}

export default App;
