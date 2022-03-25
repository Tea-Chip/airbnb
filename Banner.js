import React, { useState } from 'react'
import './Banner.css'
import Search from './Search'
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState 
    (false);
    
    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search />}
                <button onClick={() => setShowSearch(!showSearch)} className='banner_searchButton'>{showSearch ? "Hide" : "Show Dates"}</button>
            </div>
            <div className='banner_info'>
                <h1>Get out and stretch your imagination!</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you.</h5>
                <button onClick={() => history.push('/search')}
                 variant='outlined'>Explore Nearby</button>
            </div>
        </div>
    )
}

export default Banner
