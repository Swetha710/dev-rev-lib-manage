import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./book.css";

function Book({item}) {
  const navigate = useNavigate();
  const navigateToBookdesc =() =>{
    navigate('/bookdescription');
  };
  
  return (
    <div className="Book">
        <img className="bcompimg"src={item.image} />
        <div className='bcompinfo'>
            <h4 className='bcomptitle'>{item.title}</h4>
            <button className='bcompbtn' onClick={navigateToBookdesc}>Read more</button>
        </div>
    </div>
  )
}

export default Book