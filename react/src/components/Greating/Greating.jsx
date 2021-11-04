import React from 'react';

const Greating = (props) => {
    
const now = new Date().getHours();
    if(now >= 22 && now <= 3){
        return <h1>Good night, {props.name}</h1>
    };
    if (now >= 3 && now <= 12) {
        return <h1>Good morning, {props.name}</h1>
    };
    if(now >= 12 && now <= 18){
        return <h1>Good afternoon, {props.name}</h1>
    };
    if (now >= 18 && now <= 22) {
        return <h1>Good evening, {props.name}</h1>
    };
}
export default Greating;
