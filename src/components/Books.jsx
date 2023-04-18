import React from 'react';
import { popularbooks } from '../data';
import Book from './Book';
import "./books.css";

function Books() {
  return (
    <div className="Books">
        {popularbooks.map((item)=>(
            <Book item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default Books;