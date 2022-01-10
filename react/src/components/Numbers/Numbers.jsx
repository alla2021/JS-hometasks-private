import React from 'react'
import './numbers.scss'
 
const Numbers = ({ start, end, odd, even }) => {
    let arr = []

    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    if (odd) {
      arr = arr.filter((item) => item % 2 !== 0);
    } else if (even) {
      arr = arr.filter((item) => item % 2 === 0);
    } 
    return (
      <>
      <div className='list'>
      <h3 className='list__title'>Task</h3>
        <ul className='list__items'>
        {arr.map(item => <li key={item} className='list__item'><a href={'/'+item}>{item}</a></li>
          )}
       </ul>
       </div>
       </>
  )
}
 
export default Numbers