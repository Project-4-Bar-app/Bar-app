import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Drinks from './components/Drinks';
import requests from './services/requests';

function App() {

  const [selectedItem, setSelectedItem] = useState(requests.fetchOrdinaryDrinks)

  return (
    <div className="app">
      <Header />

      <Nav setSelectedItem={setSelectedItem} />

      <Drinks selectedItem={selectedItem}/>
    </div>
  );
}

export default App;
