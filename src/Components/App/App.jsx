import React, { useEffect } from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './App.css';

function App() {

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <h2>Bem-vindo!</h2>
          <p>Conteúdo principal da aplicação.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
