import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='logout'>
      <button className='btn1'style={{textDecoration:"none"}}>LogOut</button>
    </Link>
  );
}
