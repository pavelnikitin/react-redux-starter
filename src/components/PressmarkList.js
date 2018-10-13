import React from 'react';
import Pressmark from './Pressmark.js';


const PressmarkList = (props) => {
  return (
    <div>
       {props.catalog.map((item) => {
        return <Pressmark key={item.id} pressmark={item.pressmark} weight={item.weight} url={item.imgUrl}/>
       })}  
    </div>
  )
}

export default PressmarkList

