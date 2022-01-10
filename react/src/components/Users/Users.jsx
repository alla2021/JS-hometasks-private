import React from 'react'; 
 
const list = [ 
    { firstName: 'Oleg', 
      lastName: 'Shevchenko', 
      age: 33, 
    } ,   
    { 
      firstName: 'Mark', 
      lastName: 'Ivanov', 
      age: 30, 
    }, 
]; 
 
const Users = ({firstName, lastName, age}) => ( 
    <ul> 
        {list.map(item => ( 
        <li>Name:{item.firstName} Lastname:{item.lastName} Age:{item.age}</li> 
        ))} 
    </ul> 
    ) 
 
export default Users;