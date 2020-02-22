import React from 'react';
import logo from './beatboxlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import products from './API/products'
import MyNavbar from './MyNavbar'
import MyCarousel from './MyCarousel'
import MyFooter from './MyFooter'
import CardSection from './CardSection'

function App() {
  return (
    <div>
    <MyNavbar />
    <MyCarousel />
    <CardSection />
    <MyFooter />
    </div>
  );
}

export default App;
