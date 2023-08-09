import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import ModeBtn from './components/ModeBtn';

function App() {
  
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <Nav />
      <ModeBtn/>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
