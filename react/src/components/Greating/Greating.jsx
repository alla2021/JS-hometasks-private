import React from 'react';

const Greating = ({ name }) => {   
const now = new Date().getHours();
let greeting = '';
    if(now >= 22 && now <= 3){
       greeting = 'Good night';
    };  if (now >= 3 && now <= 12) {
        greeting = 'Good morning';
    }; if(now >= 12 && now <= 18){
        greeting = '“Good afternoon';
    }; if (now >= 18 && now <= 22) {
        greeting = 'Good evening';
    }; 
    return (
        <h2>{greeting}, {name}</h2>)
}
export default Greating;
