import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyRouter from './router/MyRouter';


function App() {
  return (
    <div>
        <Header/>
        <MyRouter/>
        <Footer/>
    </div>
  );
}

export default App;
