import React from 'react'
import './numbers.scss';

const Numbers = (props) => {
    const arr = []
    for (var i = props.start; i <= props.end; i++) {
      arr.push(i);
   }
    return (
      <>
      <div className='list'>
      <h3 className='list__title'>Task</h3>
        <ul className='list__items'>
        {arr.map(item => <li  className='list__item'><a href={'/'+item}>{item}</a></li>
          )}
       </ul>
       </div>
       </>
  )
}

export default Numbers;
