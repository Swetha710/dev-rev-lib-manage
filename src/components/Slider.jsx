import React from 'react';
import "./slider.css";
import { useNavigate } from 'react-router-dom';

function Slider() {
  const navigate = useNavigate();

  const navigateToCategories = () => {
    navigate('/categories');
  };
  return (
    <div className="Slider">
        <div className='sinfo-container'>
            <h1 className='sheading'>Enjoy your reading.</h1>
            <p className='spara'>
                Not sure what to read next? Here are our most popular and trending
                collections.
            </p>
            <button className='sbtn' href="/categories" onClick={navigateToCategories}>Explore</button>
        </div>
    </div>
  )
}

export default Slider