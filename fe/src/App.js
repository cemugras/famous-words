import './App.css';
import QuotesCard from './components/quotes-card/QuotesCard';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='body'>
      <Navbar/>
      <QuotesCard />
    </div>
  );
}

export default App;
