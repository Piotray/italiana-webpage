import React, { useState } from 'react';
import './Bites.css'; 

const Bites = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const pizzaItems = [
    { id: 1, image: './assets/bites/pizza1.jpg', header: 'Pepperoni Pizza', text: 'Pepperoni, Salami, Mushrooms', price: '$10' },
    { id: 2, image: './assets/bites/pizza2.jpg', header: 'Carbonara Pizza', text: 'Bacon, Spinach, Feta Cheese', price: '$12' },
    { id: 3, image: '/assets/bites/pizza3.jpg', header: 'Capricciosa Pizza', text: 'Ham, Pineapple, Red Onions', price: '$12' },
  
  ];

  const pastaItems = [
    { id: 1, image: '/assets/bites/pasta1.jpg', header: 'Spaghetti Carbonara', text: 'Spaghetti, Pancetta, Egg', price: '$8' },
    { id: 2, image: '/assets/bites/pasta2.jpg', header: 'Fettuccine Alfredo', text: 'Fettuccine, Cream, Parmesan', price: '$9' },
    { id: 3, image: '/assets/bites/pasta3.jpg', header: 'Penne Arrabbiata', text: 'Penne, Tomato Sauce, Garlic', price: '$9' },
  ];

  const saladItems = [
    { id: 1, image: '/assets/bites/salad1.jpg', header: 'Panzanella Salad', text: 'Mixed Greens, Tomatoes, Olives', price: '$7' },
    { id: 2, image: '/assets/bites/salad2.jpg', header: 'Insalata di Riso', text: 'Rice, Tuna, Red Peppers', price: '$8' },
    { id: 3, image: '/assets/bites/salad3.jpg', header: 'Insalata di Farro', text: 'Farro, Arugula, Roasted Vegetables', price: '$7' },
  ];

  const renderItems = (items) => {
    return items.map(item => (
      <div key={item.id} className="card">
        <img src={item.image} alt={item.header} className="card-image" />
        <h3 className="card-header">{item.header}</h3>
        <p className="card-text">{item.text}</p>
        <p className="card-price">{item.price}</p>
      </div>
    ));
  };

  return (
    <div>
      <nav className="bites-navbar" id='bites-section'>
        <ul className="bites-nav-list">
          <li><a href="#pizza" onClick={() => setSelectedCategory('pizza')}>Pizza</a></li>
          <li><a href="#pasta" onClick={() => setSelectedCategory('pasta')}>Pasta</a></li>
          <li><a href="#salad" onClick={() => setSelectedCategory('salad')}>Salad</a></li>
        </ul>
      </nav>
      <div className="bites-content">
        {selectedCategory === 'pizza' && renderItems(pizzaItems)}
        {selectedCategory === 'pasta' && renderItems(pastaItems)}
        {selectedCategory === 'salad' && renderItems(saladItems)}
        {selectedCategory === null && (
          <div className="default-content">
            <h2>👆 CLICK TO SEE WHAT WE HAVE 👆</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bites;
