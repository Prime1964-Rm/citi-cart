import React from 'react'
import './MenuItems.scss'

// function MenuItems({ title, imageUrl, size }) {
//     return (
//         <div className={`${size} menu-items`}>
//             <div className="background-image" 
//             style={{
//                 backgroundImage: `url(${imageUrl})`
//             }}/>
//             <div className="content">
//                 <h1 className="title">{title}</h1>
//                 <span className="sub-title">Shop-now</span>
//             </div>
//         </div>
//     )
// }

// export default MenuItems

  
// import React from 'react';


const MenuItems = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-items`}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItems;

