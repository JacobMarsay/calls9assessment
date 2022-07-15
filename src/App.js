import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Blog from './pages/Blog';
import Informationbar from './components/banners/Informationbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
        <header>
          <Navbar/>
        </header>
        <main>
          <Blog/>
          <Informationbar/>
        </main>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

export default App;
