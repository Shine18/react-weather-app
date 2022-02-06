import React from 'react'

export default function Main({ condition, temperature, location, onSearchButtonClick }){
    console.log("Condition", condition)
    return <div className='main'>
        <button className='btn-search' onClick={onSearchButtonClick}>
            <img src="/icons/search.png" alt="Search" />
        </button>
        <div className="temperature">{temperature}<sup>o</sup>C</div>
        <div className="location-info">
            <div className='location'>
                <div className='condition'>{condition.text}</div>
                <div className='location-title'>{location.name}, {location.country}</div>
            </div>
            <div className='icon'>
                <img src={condition.icon} alt="Weather icon" />
            </div>
        </div>
    </div>
}