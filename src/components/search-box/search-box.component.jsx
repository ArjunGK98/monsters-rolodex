import React from 'react';
import './search-box.styles.css';

function searchBox({placeholder, changeHandler}) {
    return (
        <div className= 'search'>
            <input type='search' placeholder={placeholder} onChange={changeHandler}></input>
        </div>
    )
}

export default searchBox;
