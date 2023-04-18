import React from 'react';
import {category} from "../data";
import CategoryItem from './CategoryItem';
import "./categories.css";

function Categories() {
  return (
    <div className="Categories">
        {category.map((item)=>(
            <CategoryItem item={item} />
        ))}
    </div>
  )
}

export default Categories