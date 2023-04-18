import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./categoryitem.css";


function CategoryItem({item}) {
    const navigate = useNavigate();
    const navigateToCategories = () => {
        navigate('/categories');
      };
  return (
    <div className="CategoryItem">
        <img className="ciimg"src={item.image}/>
        <div className='ciinfo'>
            <h4 className='cititle'>{item.title}</h4>
            <button className='cibtn' onClick={navigateToCategories}>Explore</button>
        </div>
    </div>
  )
}

export default CategoryItem;