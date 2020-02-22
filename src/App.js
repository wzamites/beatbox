import React from 'react';
import logo from './beatboxlogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import products from './API/products'
import MyNavbar from './MyNavbar'
import MyCarousel from './MyCarousel'
import MyFooter from './MyFooter'
import CardSection from './CardSection'


// const products = {
//   "count": 1,
//   "next": "?page=1",
//   "prev": null,
//   "results": [
//     {
//       id: 70990774,
//       name: "Spud of the Month Club",
//       description: "The best potatoes in the world. To your door. Every month.",
//       slug: "spud-of-the-month",
//       visible: true,
//       deleted: false,
//       url: "/v1/store/api/products/70990774/"    }
//   ]
// }

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
