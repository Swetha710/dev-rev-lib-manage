import React from 'react';
import "./newsletter.css";

function Newsletter() {
  return (
    <div className="Newsletter">
        <h3 className='nltitle'>
        Newsletter
        </h3>
        <p className='nldesc'>
            Get timely updates from us.
        </p>
        <div className='nlinput-container'>
        <input className="nlinput" type="text" placeholder='enter your email' />
        <button className='nlbtn'>Send</button>
        </div>
    </div>
  )
}

export default Newsletter