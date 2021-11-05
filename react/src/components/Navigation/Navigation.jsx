import React from 'react';
import './navigation.scss';

const Navigation = () => {
  const items = ['Home', 'Products', 'Contacts']
  return (
    <nav className='nav'>
      <ul className='nav__list'>
      {items.map(item => <li  className='nav__item'><a href={'/'+item}>{item}</a></li>
        )}
     </ul>
    </nav>
  )
}

export default Navigation
