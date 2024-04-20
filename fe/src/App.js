import './App.css';
import Navbar from './components/navbar/Navbar';
import Cards from './components/cards/Cards';
import Slider from './components/slider/Slider';

function App() {
  return (
<div className='body'>
  <Navbar/>
  <Slider/>
  <Cards/>
</div>
  );
}

export default App;
