import About from './components/About';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Reservation from './components/Reservation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/custom.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <About />
      <Reservation />
      <Footer />

    </div>
  );
}

export default App;
